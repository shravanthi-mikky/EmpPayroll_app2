/*
window.addEventListener('DOMContentLoaded', (Event) =>{
    createInnerHtml();
});
const createInnerHtml = () => {
    const innerHtml = `
                <tr>
                    <th>Profile</th>                   
                    <th><pre >Name</pre></th>
                    <th>Gender</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>startDate</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td><img class="profile" alt="" src="image/profile1.jpg"></td>
                    <td id = "vv" > Mickey </td>
                    <td>Female</td>
                    <td><div class='dept-label'>Sales</div>
                        <div class='dept-label'>HR</div>
                        <div class='dept-label'>Finance</div></td>
                 
                    <td>300000</td>
                    <td>27 April 2020</td>
                    <td>
                        <img id="1" class = "Icon delete" onclick="remove(this)" alt="delete"
                            src="image/dd.jpg">
                        <img id="1" class = "Icon" alt="edit" onclick="update(this)"
                            src="image/edit-Icon.png">
                    </td>         
                </tr>
                
    `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}*/



//uc4
//using template literal ES6 Feature
/*
window.addEventListener('DOMContentLoaded', (Event) =>{
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th>Profile</th><th><pre >Name</pre></th><th>Gender</th><th>Department</th><th>Salary</th><th>startDate</th><th>Action</th>";              
                                        
    const innerHtml = `${headerHtml}
                       
                <tr>
                    <td><img class="profile" alt="" src="image/profile1.jpg"></td>
                    <td id = "vv" > Mickey </td>
                    <td>Female</td>
                    <td><div class='dept-label'>Sales</div>
                        <div class='dept-label'>HR</div>
                        <div class='dept-label'>Finance</div></td>
                 
                    <td>300000</td>
                    <td>27 April 2020</td>
                    <td>
                        <img id="1" class = "Icon delete" onclick="remove(this)" alt="delete"
                            src="image/deleteicon.jpg">
                        <img id="1" class = "Icon" alt="edit" onclick="update(this)" alt="edit"
                            src="image/edit-Icon.png">
                    </td>         
                </tr>
                
    `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}

//UC5

window.addEventListener('DOMContentLoaded', (Event) =>{
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th>Profile</th><th><pre >Name</pre></th><th>Gender</th><th>Department</th><th>Salary</th><th>startDate</th><th>Action</th>";              
    let empPayrollData = createEmployeePayrollJSON()[0];                                   
    const innerHtml = `${headerHtml} 
                <tr>
                    <td><img class="profile" alt="" src="${empPayrollData._profile}"></td>
                    <td>${empPayrollData._name} </td>
                    <td>${empPayrollData._Gender}</td>
                    <td><div class='dept-label'>${empPayrollData._department[0]}</div>
                        <div class='dept-label'>${empPayrollData._department[1]}</div>
                        <div class='dept-label'>${empPayrollData._department[2]}</div></td>
                 
                    <td>${empPayrollData._Salary}</td>
                    <td>${empPayrollData._StartDate}</td>
                    <td>
                        <img name = "delete" class = "Icon delete" onclick="remove(this)" alt="delete"
                            src="image/deleteicon.jpg">
                        <img name = "edit" class = "Icon" alt="edit" onclick="update(this)" alt="edit"
                            src="image/edit-Icon.png">
                    </td>         
                </tr>
                
    `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}
const createEmployeePayrollJSON =() => {
    let empPayrollListLocal = [
        {
            _name: 'Mickey',
            _Gender:'Female',
            _department: [
                'Sales','HR','Finance'
            ],
            _Salary: '30000',
            _StartDate: '10-04-2022',
            _note:'',
            _profile: 'image/profile1.jpg'
        }
    ];
    return empPayrollListLocal;
}
*/
//uc5 adding multiple emloyee details to table from JSON

window.addEventListener('DOMContentLoaded', (Event) =>{
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th>Profile</th><th><pre >Name</pre></th><th>Gender</th><th>Department</th><th>Salary</th><th>startDate</th><th>Action</th>";              
    let innerHtml = `${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON();                                   
    for (const empPayrollData of empPayrollList)
    {
        innerHtml = `${innerHtml}
        <tr class="row" >
                    <td><img class="profile" alt="" src="${empPayrollData._profile}"></td>
                    <td>${empPayrollData._name} </td>
                    <td>${empPayrollData._Gender}</td>
                    <td class="department">${getDeptHtml(empPayrollData._department)}</td>
                 
                    <td>${empPayrollData._Salary}</td>
                    <td>${empPayrollData._StartDate}</td>
                    <td>
                        <img name = "delete" class = "Icon delete" onclick="remove(this)" alt="delete"
                            src="image/deleteicon.jpg">
                        <img name = "edit" class = "Icon" alt="edit" onclick="update(this)" alt="edit"
                            src="image/edit-Icon.png">
                    </td>         
                </tr>        
    `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}
const getDeptHtml=(deptList)=>{
let deptHtml='';
for(const dept of deptList){
    deptHtml=`${deptHtml}<div class='dept-label'>${dept}</div>`;
}
return deptHtml;
}
const createEmployeePayrollJSON =() => {
    let empPayrollListLocal = [
        {
            _name: 'Mickey',
            _Gender:'Female',
            _department: [
                'Sales','HR','Finance'
            ],
            _Salary: '30000',
            _StartDate: '10-04-2022',
            _note:'',
            _profile: 'image/profile1.jpg'
        },
        {
            _name: 'Abc',
            _Gender:'Male',
            _department: [
                'Sales','HR','Finance'
            ],
            _Salary: '30000',
            _StartDate: '10-04-2022',
            _note:'',
            _profile: 'image/profile2.jpg'
        }
    ];
    return empPayrollListLocal;
}
