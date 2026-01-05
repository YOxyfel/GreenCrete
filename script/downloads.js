document.addEventListener('DOMContentLoaded', function ()
{
    const reportButton = document.querySelector('.report-button');
    if (reportButton)
    {
        reportButton.addEventListener('click', function ()
        {
            const link = document.createElement('a');
            link.href = '../downloads/greencrete-sustainability-report-2024.pdf';
            link.download = 'GreenCrete_Doklad_Ustoychivost_2024.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    const downloadButtons = document.querySelectorAll('[data-download]');
    downloadButtons.forEach(function (button)
    {
        button.addEventListener('click', function ()
        {
            const file = this.getAttribute('data-download');
            const filename = this.getAttribute('data-filename') || file.split('/').pop();
            const link = document.createElement('a');
            link.href = file;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    });
});
