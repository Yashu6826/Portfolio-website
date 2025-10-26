export const onButtonClick = () => {
    // Path to your static PDF file in the public directory or assets
    const pdfUrl = '/Yashraj-resume.pdf'; 
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Yashraj-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };