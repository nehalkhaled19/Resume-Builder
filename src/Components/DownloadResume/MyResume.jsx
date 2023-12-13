import React from 'react';
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const MyResume = ({rootElementId , downloadFileName}) => {

    const downloadPdfDocument = () => {
        const input = document.getElementById(rootElementId);
    
        // Adjust the scale factor for a larger size (e.g., 3)
        const scaleFactor = 5;
    
        html2canvas(input, { scale: scaleFactor })
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
    
                // Adjust the width and height based on the scale factor
                const pdf = new jsPDF({ unit: 'px', format: 'a4', orientation: 'portrait' });
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = pdf.internal.pageSize.getHeight();
                const imgWidth = pdfWidth - 20; // Adjust the width
                const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio
    
                pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight); // Adjust the position
                pdf.save(`${downloadFileName}.pdf`);
            });
    };
    

    return <>
      <button className='btn btn-add px-3' onClick={downloadPdfDocument}>
          DOWNLOAD RESUME
          <i className=" mx-2 fa-solid fa-download" />
        </button>
    </> 

}

export default MyResume;