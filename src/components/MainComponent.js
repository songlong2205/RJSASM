import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import StaffList from './StaffListComponent';
import StaffInfo from './StaffInfoComponent';
import '../App.css';
import { STAFFS } from '../shared/staffs';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            staffs: STAFFS,
            selectedStaff: null
        };
    }

    onStaffSelect(staffId) {
        this.setState({ selectedStaff: staffId });
    }

    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                    <div className='container-fluid'>
                        <NavbarBrand href='/'>Ứng dụng quản lý nhân sự v1.0 </NavbarBrand>
                    </div>
                </Navbar>
                <StaffList staffs={this.state.staffs}
                    onClick={(staffId) => this.onStaffSelect(staffId)} />
                <StaffInfo
                    staff={this.state.staffs.filter((staff) => staff.id === this.state.selectedStaff )[0]} />
            </div>
        );
    }
}

export default Main;
