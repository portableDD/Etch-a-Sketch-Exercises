        const contain = document.getElementById('container');
        const reseted = document.getElementById('refresh');
        const w = 480;
        const h = 960;
        let size;


        let grid;
        let contain2;

        if (!size) {
            createGrid(16)
        }

        function createGrid(x) {
            for (var rows = 0; rows < x; rows++) {
                for (var columns = 0; columns < x; columns++) {
                    grid = document.createElement('div');
                    grid.classList.add('grid');
                    contain.appendChild(grid);
                    grid.style.width = w/x + 'px';
                    grid.style.height = w/x + 'px';
           
                };
   
            };
        }

        document.querySelector('.grid').addEventListener('mouseover', change());

        function change(){
            let move = contain ;
    
            move.addEventListener('mouseover', (e) =>{
                e.target.style.background = 'slateblue';
            })
        }

        reseted.addEventListener('click', () =>{
            console.log('its working');
            reset();
        })

        function reset(){
            contain.innerHTML = ""
            let gridSize = prompt('Please input number of grids', '')
            size = parseInt(gridSize);
            createGrid(size);
        }