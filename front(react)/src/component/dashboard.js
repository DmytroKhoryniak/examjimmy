import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Бокове меню */}
        <div className="col-md-3 text-light bg-red">
          <div className="list-group">
            <a href="http://127.0.0.1:8000/api/clothedit" className="list-group-item">Clothings</a>
            <a href="http://127.0.0.1:8000/api/categoryedit" className="list-group-item">Categories</a>
            <a href="http://127.0.0.1:8000/api/order" className="list-group-item">Orders</a>
          </div>
        </div>

        {/* Зміст сторінки */}
        <div className="col-md-9">
          <div className="row">
            {/* Зміна курсу валют */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header bg-secondary text-white">Currency Exchange Rate</div>
                <div className="card-body">
                <div class="row mb-4">
                                    <div class="">
                                        <div class="card bg-light">
                                            <div class="card-header">Exchange Rate</div>
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-md-4">USD</div>
                                                    <div class="col-md-4">EUR</div>
                                                    <div class="col-md-4">GBP</div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-4">0.89</div>
                                                    <div class="col-md-4">0.75</div>
                                                    <div class="col-md-4">1.27</div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-4">CAD</div>
                                                    <div class="col-md-4"></div>
                                                    <div class="col-md-4"></div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-4">09:52</div>
                                                    <div class="col-md-4"></div>
                                                    <div class="col-md-4"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                </div>
              </div>
            </div>

            {/* Дослідження місячних даних */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header bg-info text-white">Monthly Data Analysis</div>
                <div className="card-body">
                <div class="row">
                    <div class="">
                        <div class="card bg-light">
                            <div class="card-header">Income and Outgoings</div>
                            <div class="card-body">
                                <table class="table table-sm table-bordered">
                                    <tr>
                                        <th>Income</th>
                                        <th>Outgoings</th>
                                    </tr>
                                    <tr>
                                        <td>1200</td>
                                        <td>1000</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* Панель інформації */}
          {/* <div className="card mt-6 bg-primary text-white">
            <div className="card-header">Dashboard</div>
            <div className="card-body">
              <div className="alert alert-success" role="alert">
                You are logged in!
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;