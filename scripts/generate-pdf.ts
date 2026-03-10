import puppeteer from "puppeteer"
import path from "path"

async function generatePDF() {
  console.log("브라우저 시작 중...")
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  })

  const page = await browser.newPage()

  // A4 landscape: 1123 x 794px (96dpi 기준)
  await page.setViewport({ width: 1123, height: 794, deviceScaleFactor: 2 })

  console.log("페이지 로딩 중... (개발 서버가 실행 중이어야 합니다)")
  await page.goto("http://localhost:3000/pdf", { waitUntil: "networkidle0", timeout: 30000 })

  const outputPath = path.join(process.cwd(), "portfolio.pdf")

  await page.pdf({
    path: outputPath,
    format: "A4",
    landscape: true,
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  })

  await browser.close()
  console.log(`PDF 생성 완료: ${outputPath}`)
}

generatePDF().catch((err) => {
  console.error("PDF 생성 실패:", err)
  process.exit(1)
})
