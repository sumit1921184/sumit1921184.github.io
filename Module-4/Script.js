let name=new Array();
name[0]="Yaakov";
name[1]="John";
name[2]="Jen";
name[3]="jasoon";
name[4]="paul";
name[5]="frank";
name[6]="larry";
name[7]="paula";
name[8]="laura";
name[9]="jim";

for(let i=0;i<name.length;i++){
    if(name[i].charAt(0).toLowerCase()==='j'){
        console.log("Goodbye "+ name[i]);
    }
    else{
        console.log("Hello "+ name[i]);
    }
}