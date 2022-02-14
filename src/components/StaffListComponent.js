import React, { Component } from "react";
import { Media } from 'reactstrap';

class StaffList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            staffs : [
                {
                    id: 0,
                    name: "Nguyễn Văn A",
                    doB: "1999-01-01T08:59:00.000Z",
                    salaryScale: 1.1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    //department: DEPARTMENTS[0],
                    annualLeave: 1,
                    overTime: 1,
                    image: '/assets/images/alberto.png',
                },
                {
                    id: 1,
                    name: "Nguyễn Văn B",
                    doB: "2000-01-01T08:59:00.000Z",
                    salaryScale: 1.2,
                    startDate: "2019-04-30T08:59:00.000Z",
                    //department: DEPARTMENTS[1],
                    annualLeave: 2,
                    overTime: 3,
                    image: '/assets/images/alberto.png',
                },
                {
                    id: 2,
                    name: "Nguyễn Văn C",
                    doB: "2001-01-01T08:59:00.000Z",
                    salaryScale: 1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    //department: DEPARTMENTS[3],
                    annualLeave: 4,
                    overTime: 5,
                    image: '/assets/images/alberto.png',
                },
                {
                    id: 3,
                    name: "Nguyễn Văn D",
                    doB: "2002-01-01T08:59:00.000Z",
                    salaryScale: 1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    //department: DEPARTMENTS[2],
                    annualLeave: 6,
                    overTime: 7,
                    image: '/assets/images/alberto.png',
                },
                {
                    id: 4,
                    name: "Nguyễn Văn E",
                    doB: "1999-01-01T08:59:00.000Z",
                    salaryScale: 1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    //department: DEPARTMENTS[2],
                    annualLeave: 8,
                    overTime: 1,
                    image: '/assets/images/alberto.png',
                },
                {
                    id: 5,
                    name: "Nguyễn Văn F",
                    doB: "2003-01-01T08:59:00.000Z",
                    salaryScale: 1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    //department: DEPARTMENTS[4],
                    annualLeave: 9,
                    overTime: 10,
                    image: '/assets/images/alberto.png',
                },
                {
                    id: 6,
                    name: "Nguyễn Văn F",
                    doB: "2003-01-01T08:59:00.000Z",
                    salaryScale: 1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    //department: DEPARTMENTS[4],
                    annualLeave: 9,
                    overTime: 10,
                    image: '/assets/images/alberto.png',
                },
                {
                    id: 7,
                    name: "Nguyễn Văn F",
                    doB: "2003-01-01T08:59:00.000Z",
                    salaryScale: 1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    //department: DEPARTMENTS[2],
                    annualLeave: 9,
                    overTime: 10,
                    image: '/assets/images/alberto.png',
                },
                {
                    id: 8,
                    name: "Nguyễn Văn F",
                    doB: "2003-01-01T08:59:00.000Z",
                    salaryScale: 1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    //department: DEPARTMENTS[3],
                    annualLeave: 9,
                    overTime: 10,
                    image: '/assets/images/alberto.png',
                },
                {
                    id: 9,
                    name: "Nguyễn Văn F",
                    doB: "2003-01-01T08:59:00.000Z",
                    salaryScale: 1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    //department: DEPARTMENTS[4],
                    annualLeave: 9,
                    overTime: 10,
                    image: '/assets/images/alberto.png',
                },
                {
                    id: 10,
                    name: "Nguyễn Văn F",
                    doB: "2003-01-01T08:59:00.000Z",
                    salaryScale: 1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    //department: DEPARTMENTS[4],
                    annualLeave: 9,
                    overTime: 10,
                    image: '/assets/images/alberto.png',
                },
                {
                    id: 11,
                    name: "Nguyễn Văn F",
                    doB: "2003-01-01T08:59:00.000Z",
                    salaryScale: 1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    //department: DEPARTMENTS[4],
                    annualLeave: 9,
                    overTime: 10,
                    image: '/assets/images/alberto.png',
                },
                {
                    id: 12,
                    name: "Nguyễn Văn F",
                    doB: "2003-01-01T08:59:00.000Z",
                    salaryScale: 1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    //department: DEPARTMENTS[4],
                    annualLeave: 9,
                    overTime: 10,
                    image: '/assets/images/alberto.png',
                },
                {
                    id: 13,
                    name: "Nguyễn Văn F",
                    doB: "2003-01-01T08:59:00.000Z",
                    salaryScale: 1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    // department: DEPARTMENTS[4],
                    annualLeave: 9,
                    overTime: 10,
                    image: '/assets/images/alberto.png',
                },
                {
                    id: 14,
                    name: "Nguyễn Văn F",
                    doB: "2003-01-01T08:59:00.000Z",
                    salaryScale: 1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    // department: DEPARTMENTS[4],
                    annualLeave: 9,
                    overTime: 10,
                    image: '/assets/images/alberto.png',
                },
                {
                    id: 15,
                    name: "Nguyễn Văn F",
                    doB: "2003-01-01T08:59:00.000Z",
                    salaryScale: 1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    // department: DEPARTMENTS[4],
                    annualLeave: 9,
                    overTime: 10,
                    image: '/assets/images/alberto.png',
                },
            ]
        }
    }

    render() {

        const list = this.state.staffs.map((staff) => {
            return (
                <div key={staff.id} className="col-lg-4 col-md-6 col-sm-12">
                    <p style={{border : '1px solid grey'}}>{staff.name}</p>
                    {/* <Media tag="li">
                        <Media left middle>
                            <Media object src={staff.name} alt={staff.name} />
                        </Media>
                        <Media body className="ml-5">
                                <Media heading>{staff.name}</Media>
                                <p>{staff.overTime}</p>
                        </Media>
                    </Media> */}
                </div>
            );
        });

        return (
            <div className="container-fluid">
                <div className="row mt-1">
                    <Media>
                        {list}
                    </Media>
                </div>
                <p>Bấm vào tên nhân viên để xem thông tin</p>
            </div>
        );

    }
}

export default StaffList;