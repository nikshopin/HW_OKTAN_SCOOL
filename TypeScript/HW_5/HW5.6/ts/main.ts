let unorder = (text: string): void => {
    document.write('<ul>');
    for (let i: number = 0; i < 3; i++) {
        document.write('<li>' + text + '</li>');
    }
    document.write('</ul>');
}

unorder('test text');