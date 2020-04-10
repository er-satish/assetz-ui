import React, { Component } from 'react';

class MySidebar extends Component {
    render() {
        return (
            <nav class="col-md-2 d-none d-md-block bg-light sidebar">
                <div class="sidebar-sticky">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Retirement <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Near Future</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Emergency Fund</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default MySidebar;