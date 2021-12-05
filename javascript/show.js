function myfunction()
{
	var tr=document.createElement("TR");
	var td1=document.createElement("TD");
	var td2=document.createElement("TD");
	var td3=document.createElement("TD");
	var td4=document.createElement("TD");
	var task=document.getElementById("input").value;
	var node1=document.createTextNode(task);
	const d = new Date();
	let text = d.toLocaleDateString();
	var node2=document.createTextNode(text);
	var node3=document.createTextNode("\u2713");
	var node4=document.createTextNode("\u00D7");
	if(task=="")
	{
		alert("You must write something!");
		return;
	}
	td1.appendChild(node1);
	td2.appendChild(node2);
	// td3.setAttribute("onclick","this.parentElement.style.display='none'");
	td3.setAttribute("onclick","doneitem(this)");
	td3.classList.add("done")
	td3.appendChild(node3);
	// td4.setAttribute("onclick","this.parentElement.style.display='none'");
	td4.setAttribute("onclick","removeitem(this)");
	td4.classList.add("close");
	td4.appendChild(node4);
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tr.appendChild(td4);
	document.getElementById("table").appendChild(tr);
	document.getElementById("input").value="";

}

// this code for confirmation

function removeitem(th){
	var r=confirm("You want to discard!");
	if(r==true)
		th.parentElement.style.display='none';

}

// this code for done

function doneitem(x)
{
	x.parentElement.classList.add("task-done");
}