// 이미지 다운로드 함수
function downloadImage(url, filename) {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
  
    link.dispatchEvent(new MouseEvent('click'));
  }
  
  // 웹페이지의 이미지 다운로드 함수
  function downloadImagesFromWebsite() {
    const images = document.getElementsByTagName('img');
  
    for (let i = 0; i < images.length; i++) {
      const url = images[i].src;
      const filename = 'image_' + i + '.jpg'; // 이미지 파일명 설정 (원하는 형식으로 변경 가능)
  
      downloadImage(url, filename);
    }
  }
  
  // 이미지 다운로드 실행
  downloadImagesFromWebsite();