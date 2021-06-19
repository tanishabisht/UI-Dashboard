import React from 'react'
import classes from './Table.module.css'

const datas = [
    {head:'Basic Vacation', date:'27.08.2019 - 15.09.2019', daysLeft:'16 Days', status:'Approved'},
    {head:'Basic Vacation', date:'27.08.2019 - 15.09.2019', daysLeft:'2 Days', status:'Pending'},
    {head:'Study Vacation', date:'27.08.2019 - 15.09.2019', daysLeft:'4 Days', status:'Approved'},
    {head:'Study Vacation', date:'27.08.2019 - 15.09.2019', daysLeft:'5 Days', status:'Rejected'},
    {head:'Parental Leave', date:'27.08.2019 - 15.09.2019', daysLeft:'13 Days', status:'Pending'},
    {head:'Study Vacation', date:'27.08.2019 - 15.09.2019', daysLeft:'5 Days', status:'Rejected'},
    {head:'Parental Leave', date:'27.08.2019 - 15.09.2019', daysLeft:'13 Days', status:'Pending'}
]

const Table = () => {
    return (
        <React.Fragment>
            <div className={classes.SearchInputContainer}>
                <i className="fa fa-search"></i>
                <input placeholder='Sorting Option ...' className={classes.SearchInput} />
            </div>
            <table className={classes.Table}>
                {datas.map(data => (                
                    <tr>
                        <td><i style={{color:'rgb(109, 212, 141)'}} className={`fa fa-cog ${classes.headIcon}`}></i>{data.head}</td>
                        <td><i style={{color:'rgb(116, 200, 221)'}} className="fa fa-calendar-check-o"></i>{data.date}</td>
                        <td><i style={{color:'rgb(234, 120, 190)'}} className="fa fa-clock-o"></i>{data.daysLeft}</td>
                        <td>{data.status}</td>
                    </tr>
                ))}
            </table>
        </React.Fragment>
    )
}

export default Table