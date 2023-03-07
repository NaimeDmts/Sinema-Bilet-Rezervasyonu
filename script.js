const container = document.querySelector('.container');
const select = document.getElementById('movie');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const seats = document.querySelectorAll('.seat:not(.reserved)');

container.addEventListener('click', function(e){
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){
        e.target.classList.toggle('selected');
        calculateTotal();
    }
});

select.addEventListener('change', function(e){
    calculateTotal();
});

function calculateTotal(){
    let selectedSeats = container.querySelectorAll('.seat.selected');
    
    const selectedSeatArr = [];
    const seatsArr = [];

    selectedSeats.forEach(function(seat){
        selectedSeatArr.push(seat);
    });

    seats.forEach(function(seat){
        seatsArr.push(seat);
    });
     
    let selectedSeatIndexs = selectedSeatArr.map(function(seat){
        return seatsArr.indexOf(seat);
    })
    //spread 
    let selectedSeatCount = selectedSeats.length;
    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * select.value;

    saveToLocalStorage(selectedSeatIndexs);
}

function saveToLocalStorage(indexs){
    localStorage.setItem('selectedSeats', JSON.stringify(indexs));
    localStorage.setItem('selectedMovieIndex', select.selectedIndex);
}