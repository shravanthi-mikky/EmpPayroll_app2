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




//using template literal ES6 Feature

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