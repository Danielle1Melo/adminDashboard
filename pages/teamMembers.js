import styles from "@/styles/TeamMembers.module.css"
import Navbar from "@/components/Navbar"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

export default function TeamMembers(){


    const columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'firstName', headerName: 'First name', width: 130 },
      { field: 'lastName', headerName: 'Last name', width: 130 },
      { field: 'Job', headerName: 'Job', width: 250 },
      { field: 'Skill', headerName: 'Skill', width: 130 },
      {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
      },
      {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
          `${params.row.firstName || ''} ${params.row.lastName || ''}`,
      },
      {
        field: 'action',
        headerName: 'Active',
        width: 230,
        renderCell: (params) =>{
            return (
                <button className={styles.editBtn}>Edit</button>
            )
        }
      },
    ];
    
    const rows = [
      { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, Job:"Software Developer", Skill:"NextJS" },
      { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, Job:"Software Developer", Skill:"NextJS" },
      { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, Job:"Software Developer", Skill:"NextJS" },
      { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, Job:"Software Developer", Skill:"NextJS" },
      { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, Job:"Software Developer", Skill:"NextJS" },
      { id: 6, lastName: 'Melisandre', firstName: null, age: 50, Job:"Software Developer", Skill:"NextJS" },
      { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, Job:"Software Developer", Skill:"NextJS" },
      { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, Job:"Software Developer", Skill:"NextJS" },
      { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 35, Job:"Software Developer", Skill:"NextJS" },
      { id: 11, lastName: 'Snow', firstName: 'Jon', age: 35, Job:"Software Developer", Skill:"NextJS" },
      { id: 21, lastName: 'Lannister', firstName: 'Cersei', age: 42, Job:"Software Developer", Skill:"NextJS" },
      { id: 31, lastName: 'Lannister', firstName: 'Jaime', age: 45, Job:"Software Developer", Skill:"NextJS" },
      { id: 41, lastName: 'Stark', firstName: 'Arya', age: 16, Job:"Software Developer", Skill:"NextJS" },
      { id: 15, lastName: 'Targaryen', firstName: 'Daenerys', age: null, Job:"Software Developer", Skill:"NextJS" },
      { id: 61, lastName: 'Melisandre', firstName: null, age: 18, Job:"Software Developer", Skill:"NextJS" },
      { id: 17, lastName: 'Clifford', firstName: 'Ferrara', age: 44, Job:"Software Developer", Skill:"NextJS" },
      { id: 81, lastName: 'Frances', firstName: 'Rossini', age: 36, Job:"Software Developer", Skill:"NextJS" },
      { id: 19, lastName: 'Roxie', firstName: 'Harvey', age: 20, Job:"Software Developer", Skill:"NextJS" },
    ];
    

    return(
        <div>
            <Navbar />
            <div style={{ height: "90vh", width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    pageSizeOptions={[5]}
                    checkboxSelection
                />
            </div>
        </div>

    )
}