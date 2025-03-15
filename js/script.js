document.addEventListener('DOMContentLoaded', function () {
    const copyButtons = document.querySelectorAll('.copy-button');
    copyButtons.forEach(button => {
        button.addEventListener('click', function () {
            const codeElement = this.previousElementSibling;
            const codeText = codeElement.textContent;
            navigator.clipboard.writeText(codeText).then(() => {
                alert('代码已复制到剪贴板');
            }).catch((err) => {
                console.error('复制失败: ', err);
            });
        });
    });
});