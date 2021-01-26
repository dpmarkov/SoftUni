function extractFile(path) {
    let file = path.substring(path.lastIndexOf('\\') + 1);
    let lastDot = file.lastIndexOf('.');
    
    let fileName = file.substring(0, lastDot)
    let extension = file.substring(lastDot+1);

    console.log("File name: " + fileName);
    console.log("File extension: " + extension);
}

extractFile(
    'C:\\Internal\\training-internal\\Template.pptx'
)

extractFile(
    'C:\\Projects\\Data-Structures\\LinkedList.cs'
)

extractFile(
    "Test..exe"
)