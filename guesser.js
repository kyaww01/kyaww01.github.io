function check()
{
    var x = 0;
    let numb = 4;
        let user_numb = document.querySelector('#number').value;
        if(user_numb > numb)
        {
            document.querySelector('#hint').innerHTML = 'The number is smaller.';
        }
        else if(user_numb < numb)
        {
            document.querySelector('#hint').innerHTML = 'The number is bigger.';
        }
        else
        {
            document.querySelector('#hint').innerHTML = 'Correct!';
        }
        
}