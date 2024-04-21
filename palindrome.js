document.addEventListener('DOMContentLoaded', function () {

    var button = document.getElementById('check-btn');
    var input = document.getElementById('text-input');
    var result = document.getElementById(
        'result'
    );



    button.addEventListener('click', function () {

        var text = input.value.toLowerCase().replace(/[^a-z0-9]/g, '');
        var reversedText = text.split('').reverse().join('');

        if (input.value === '') {
            alert('Please input a value');
        }
        if (input.value === 'A') {
            alert('A is a palindrome');

        }
        if (text === reversedText && text !== '') {
            result.textContent = input.value + ' is a palindrome';
        }
        else {
            result.textContent = input.value +
                ' is not a palindrome';
        }
    }


    );
});
