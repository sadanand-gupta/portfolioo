const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generatePDF() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const htmlPath = path.resolve(__dirname, 'Surendhar_M_ATS_Resume.html');
  const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

  // Remove the ATS analysis section for clean output
  const cleanHtml = htmlContent.replace(
    /<div class="ats-section">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/,
    ''
  );

  await page.setContent(cleanHtml, { waitUntil: 'networkidle0' });

  // Generate PDF
  const pdfPath = path.resolve(__dirname, 'Surendhar_M_ATS_Resume.pdf');
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    margin: { top: '36px', right: '40px', bottom: '36px', left: '40px' },
    printBackground: true,
  });
  console.log('PDF generated:', pdfPath);

  await browser.close();
}

function generateDOCX() {
  // Generate a clean .doc (HTML-based, opens in Word/Google Docs)
  const htmlPath = path.resolve(__dirname, 'Surendhar_M_ATS_Resume.html');
  let htmlContent = fs.readFileSync(htmlPath, 'utf-8');

  // Remove ATS analysis section
  htmlContent = htmlContent.replace(
    /<div class="ats-section">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/,
    ''
  );

  // Add Word-specific meta for proper opening
  const wordHtml = `<!DOCTYPE html>
<html xmlns:o="urn:schemas-microsoft-com:office:office"
      xmlns:w="urn:schemas-microsoft-com:office:word"
      xmlns="http://www.w3.org/TR/REC-html40">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <!--[if gte mso 9]>
  <xml>
    <w:WordDocument>
      <w:View>Print</w:View>
      <w:Zoom>100</w:Zoom>
      <w:DoNotOptimizeForBrowser/>
    </w:WordDocument>
  </xml>
  <![endif]-->
${htmlContent.match(/<style>[\s\S]*?<\/style>/)?.[0] || ''}
</head>
<body>
${htmlContent.match(/<body>([\s\S]*?)<\/body>/)?.[1] || ''}
</body>
</html>`;

  const docPath = path.resolve(__dirname, 'Surendhar_M_ATS_Resume.doc');
  fs.writeFileSync(docPath, wordHtml, 'utf-8');
  console.log('DOC generated:', docPath);
}

async function main() {
  try {
    generateDOCX();
    await generatePDF();
    console.log('\nDone! Files created:');
    console.log('  - Surendhar_M_ATS_Resume.pdf');
    console.log('  - Surendhar_M_ATS_Resume.doc');
  } catch (err) {
    console.error('Error:', err.message);
  }
}

main();
