// npm init -y
// npm install papaparse axios

const fs = require('fs');
const axios = require('axios');
const Papa = require('papaparse');

// CSV 파일 읽기
fs.readFile('OpenData_PotOpenTabletIdntfcC20230601.csv', 'utf8', function(err, data) {
  if (err) {
    console.log('Error reading CSV file: ', err);
    return;
  }

  // CSV 파싱
  let results = Papa.parse(data, { header: true }).data;

  // 각 행을 순회하며 이미지 다운로드
  results.forEach(async (row, index) => {
    try {
      let url = row['표기이미지앞']; // 'image_url'은 CSV 파일의 컬럼 이름입니다. 이 이름을 실제 CSV 파일에 맞게 변경해 주세요.
      let response = await axios.get(url, { responseType: 'stream' });

      // 저장할 이미지 파일 경로
      let imagePath = `images/mark/image_${index}.jpg`; // 'images'는 저장할 디렉토리 이름입니다. 해당 디렉토리가 존재해야 합니다.

      // Stream을 사용하여 이미지 파일 저장
      response.data.pipe(fs.createWriteStream(imagePath));

      console.log(`Image saved at ${imagePath}`);
    } catch (error) {
      console.log('Error downloading image: ', error);
    }
  });
});
