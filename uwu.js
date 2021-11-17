const owoify = window["owoify-js"].default;

        function makeUwu(){
        let x = document.getElementById("uwuText").value;
        document.getElementById("result").innerHTML = owoify(x);
        }