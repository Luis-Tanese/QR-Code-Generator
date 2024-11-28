function generateQRCode(value) {
    const qrCodeContainer = document.getElementById("qrcode");
    const canvas = document.getElementById("qrcode-canvas");
    const downloadBtn = document.getElementById("download-btn");
    qrCodeContainer.innerHTML = "";
    downloadBtn.style.display = "none";
    canvas.style.display = "none";

    if (value.trim() === "") {
        return;
    }

    QRCode.toCanvas(canvas, value, { width: 150, margin: 2 }, (error) => {
        if (error) {
            console.error(error);
            return;
        }
        canvas.style.display = "block";
        downloadBtn.style.display = "inline-block";
    });
}

function downloadQRCode() {
    const canvas = document.getElementById("qrcode-canvas");

    if (!canvas) {
        alert("No QR Code to download!");
        return;
    }

    const pngUrl = canvas.toDataURL("image/png");
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qrcode.png";
    downloadLink.click();
}

document.getElementById("text-input").addEventListener("input", (event) => {
    generateQRCode(event.target.value);
});