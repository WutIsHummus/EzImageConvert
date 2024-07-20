function base64ToBlob(base64, mimeType) {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return new Blob([bytes], {type: mimeType});
}

function blobToFile(blob, filename) {
    return new File([blob], filename, {
        type: blob.type,
        lastModified: Date.now()
    });
}




export function convertToPng(imageData) {
    const blob = base64ToBlob(imageData, 'image/png');
    const file = blobToFile(blob, 'converted.png');
    downloadFile(file);
}

export function convertToJpeg(imageData) {
    const blob = base64ToBlob(imageData, 'image/jpeg');
    const file = blobToFile(blob, 'converted.jpeg');
    downloadFile(file);
}

export function convertToGif(imageData) {
    const blob = base64ToBlob(imageData, 'image/gif');
    const file = blobToFile(blob, 'converted.gif');
    downloadFile(file);
}

export function convertToAvif(imageData) {
    const blob = base64ToBlob(imageData, 'image/avif');
    const file = blobToFile(blob, 'converted.avif');
    downloadFile(file);
}

export function convertToWebp(imageData) {
    const blob = base64ToBlob(imageData, 'image/webp');
    const file = blobToFile(blob, 'converted.webp');
    downloadFile(file);
}

function downloadFile(file) {
    const reader = new FileReader();
    reader.onloadend = function() {
        const dataUrl = reader.result;
        chrome.downloads.download({
            url: dataUrl, 
            filename: file.name,
            saveAs: true 
        }, function(downloadId) {
            if (chrome.runtime.lastError) {
                console.error('Error downloading file:', chrome.runtime.lastError);
            } else {
                console.log('File download started with ID:', downloadId);
            }
        });
    };

    // Initiate the FileReader
    reader.readAsDataURL(file);
}


