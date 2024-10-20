// ドラッグ&ドロップ領域の設定
const dropArea = document.getElementById('drop-area');
const qrCode = document.getElementById('qr-code');
const imageUrlDisplay = document.getElementById('image-url');

// ドラッグオーバー時のイベント
dropArea.addEventListener('dragover', (event) => {
    event.preventDefault();
    dropArea.style.backgroundColor = '#e0e0e5'; // ドラッグ中のスタイル変更
});

// ドロップ時のイベント
dropArea.addEventListener('dragleave', () => {
    dropArea.style.backgroundColor = '#fff'; // ドロップ後のスタイル戻し
});

dropArea.addEventListener('drop', (event) => {
    event.preventDefault();
    dropArea.style.backgroundColor = '#fff';

    const files = event.dataTransfer.files;
    if (files.length > 0) {
        const file = files[0];
        const imageUrl = URL.createObjectURL(file);

        // QRコード生成
        generateQRCode(imageUrl);
        // 画像URL表示
        imageUrlDisplay.textContent = imageUrl;
    }
});

// QRコードを生成する関数
function generateQRCode(url) {
    qrCode.innerHTML = ""; // QRコードエリアをリセット
    new QRCode(qrCode, {
        text: url,
        width: 150,
        height: 150
    });
}