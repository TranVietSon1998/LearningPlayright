import { test } from "@playwright/test";

test.describe("test suite basic", async () => {
  test("test case1: ", async ({ page }) => {
    await page.goto(
      "https://material.playwrightvn.com/04-xpath-personal-notes.html"
    );
    const notes = [
      {
        title: "Nhà khoa học Việt biến bùn thải giấy thành vật liệu có ích",
        content:
          "Nghiên cứu tái chế bùn thải từ nhà máy giấy thành vật liệu xây dựng thân thiện môi trường",
      },
      {
        title: "Đưa công nghệ trí tuệ nhân tạo vào dự báo sớm rủi ro thiên tai",
        content:
          "Ứng dụng AI giúp dự báo sớm lũ lụt, sạt lở và các hiện tượng thời tiết cực đoan",
      },
      {
        title: "Tạo thành công hạt giống hành tím",
        content:
          "Viện Khoa học Nông nghiệp Việt Nam nghiên cứu và tạo giống hành tím năng suất cao",
      },
      {
        title: "47 công trình thắng giải Sáng tạo khoa học công nghệ Việt Nam",
        content:
          "Các công trình khoa học xuất sắc được vinh danh trong năm nay",
      },
      {
        title: "TP HCM đặt hàng nghiên cứu khung bệnh án điện tử dùng chung",
        content:
          "Dự án xây dựng hệ thống bệnh án điện tử thống nhất cho toàn thành phố",
      },
      {
        title: "title 6",
        content: "content 6",
      },
      {
        title: "title 7",
        content: "content 7",
      },
      {
        title: "title 8",
        content: "content 8",
      },
      {
        title: "title 9",
        content: "content 9",
      },
      {
        title: "title 10",
        content: "content 10",
      },
    ];
    for (const note of notes) {
      await page.locator("#note-title").fill(note.title);
      await page.locator("#note-content").fill(note.content);
      await page.locator("#add-note").click();
    }
  });
});
