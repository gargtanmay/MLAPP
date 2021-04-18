const dense = document.getElementById('dense');
const densebutton = document.getElementById('densebutton');

var content1 = [];

densebutton.addEventListener('click',(e)=>{
    e.preventDefault();
    const savbut = document.createElement("button");
    savbut.classList.add('btn', 'btn-primary');
    savbut.innerText='Save';
    savbut.id='savebut';
    const div = document.createElement("div");
    const label = document.createElement("label");
    label.innerText="Number Of Neurons"
    const label1 = document.createElement("label");
    label1.innerText="Activation Function"
    const label2 = document.createElement("label");
    label2.innerText="Dropout"
    const inp = document.createElement("input");
    const inp1 = document.createElement("input");
    inp.classList.add('form-control')
    inp1.classList.add('form-control')
    div.appendChild(label);
    div.appendChild(inp);
    div.append(document.createElement("BR"));
    div.appendChild(label2);
    div.appendChild(inp1);
    div.append(document.createElement("BR"));
    var array = ["Select","Adam","SGD"];
    const selectList = document.createElement("select");
    selectList.classList.add('form-control');
    div.appendChild(label1);
    div.appendChild(selectList);


    for (var i = 0; i < array.length; i++) {
        var option = document.createElement("option");
        option.value = array[i];
        option.text = array[i];
        selectList.appendChild(option);
    }
    div.append(document.createElement("BR"));
    div.appendChild(savbut);
    div.style.border="1px solid black";
    div.style.padding="20px";
    
    dense.appendChild(div);
   
    savbut.addEventListener('click',(e)=>{
        content1.push([selectList.value,inp.value,inp1.value]);
        div.remove();
    });
});
