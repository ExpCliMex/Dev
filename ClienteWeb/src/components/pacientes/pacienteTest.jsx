import React from "react";
import "../styles/fonts/feather-font/css/iconfont.css";
import { useForm } from "react-hook-form";
export default function (PacienteTest) {
const { register, watch, handleSubmit } = useForm();
const onSubmit = data => console.log(data);
console.log(watch("example")); // watch input value by passing the name of it
        return (
          <div className="page-content">
				<div className="row chat-wrapper">
					<div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="row position-relative">
                  <div className="col-lg-4 chat-aside border-end-lg">
                    <div className="aside-content">
                      <div className="aside-header">
                        <div className="d-flex justify-content-between align-items-center pb-2 mb-2">
                          <div className="d-flex align-items-center">
                            <figure className="me-2 mb-0">
                              <img src="https://via.placeholder.com/43x43" className="img-sm rounded-circle" alt="profile"/>
                              <div className="status online"></div>
                            </figure>
                            <div>
                              <h6>Amiah Burton</h6>
                              <p className="text-muted tx-13">Software Developer</p>
                            </div>
                          </div>
                          <div className="dropdown">
                            <button className="btn p-0" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="icon-lg text-muted pb-3px" data-feather="settings" data-bs-toggle="tooltip" title="Settings"></i>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="eye" className="icon-sm me-2"></i> <span className="">View Profile</span></a>
                              <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="edit-2" className="icon-sm me-2"></i> <span className="">Edit Profile</span></a>
                              <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="aperture" className="icon-sm me-2"></i> <span className="">Add status</span></a>
                              <a className="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="settings" className="icon-sm me-2"></i> <span className="">Settings</span></a>
                            </div>
                          </div>
                        </div>
                        <form className="search-form">
                          <div className="input-group">
                            <span className="input-group-text">
                              <i data-feather="search" className="cursor-pointer"></i>
                            </span>
                            <input type="text" className="form-control" id="searchForm" placeholder="Search here..."/>
                          </div>
                        </form>
                      </div>
                      <div className="aside-body">
                        <ul className="nav nav-tabs nav-fill mt-3" role="tablist">
                          <li className="nav-item">
                            <a className="nav-link active" id="chats-tab" data-bs-toggle="tab" data-bs-target="#chats" role="tab" aria-controls="chats" aria-selected="true">
                              <div className="d-flex flex-row flex-lg-column flex-xl-row align-items-center justify-content-center">
                                <i data-feather="message-square" className="icon-sm me-sm-2 me-lg-0 me-xl-2 mb-md-1 mb-xl-0"></i>
                                <p className="d-none d-sm-block">Chats</p>
                              </div>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" id="calls-tab" data-bs-toggle="tab" data-bs-target="#calls" role="tab" aria-controls="calls" aria-selected="false">
                              <div className="d-flex flex-row flex-lg-column flex-xl-row align-items-center justify-content-center">
                                <i data-feather="phone-call" className="icon-sm me-sm-2 me-lg-0 me-xl-2 mb-md-1 mb-xl-0"></i>
                                <p className="d-none d-sm-block">Calls</p>
                              </div>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" id="contacts-tab" data-bs-toggle="tab" data-bs-target="#contacts" role="tab" aria-controls="contacts" aria-selected="false">
                              <div className="d-flex flex-row flex-lg-column flex-xl-row align-items-center justify-content-center">
                                <i data-feather="users" className="icon-sm me-sm-2 me-lg-0 me-xl-2 mb-md-1 mb-xl-0"></i>
                                <p className="d-none d-sm-block">Contacts</p>
                              </div>
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content mt-3">
                          <div className="tab-pane fade show active" id="chats" role="tabpanel" aria-labelledby="chats-tab">
                            <div>
                              <p className="text-muted mb-1">Recent chats</p>
                              <ul className="list-unstyled chat-list px-1">
                                <li className="chat-item pe-1">
                                  <a href="javascript:;" className="d-flex align-items-center">
                                    <figure className="mb-0 me-2">
                                      <img src="https://via.placeholder.com/37x37" className="img-xs rounded-circle" alt="user"/>
                                      <div className="status online"></div>
                                    </figure>
                                    <div className="d-flex justify-content-between flex-grow-1 border-bottom">
                                      <div>
                                        <p className="text-body fw-bolder">John Doe</p>
                                        <p className="text-muted tx-13">Hi, How are you?</p>
                                      </div>
                                      <div className="d-flex flex-column align-items-end">
                                        <p className="text-muted tx-13 mb-1">4:32 PM</p>
                                        <div className="badge rounded-pill bg-primary ms-auto">5</div>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li className="chat-item pe-1">
                                  <a href="javascript:;" className="d-flex align-items-center">
                                    <figure className="mb-0 me-2">
                                      <img src="https://via.placeholder.com/37x37" className="img-xs rounded-circle" alt="user"/>
                                      <div className="status offline"></div>
                                    </figure>
                                    <div className="d-flex justify-content-between flex-grow-1 border-bottom">
                                      <div>
                                        <p className="text-body fw-bolder">Carl Henson</p>
                                        <div className="d-flex align-items-center">
                                          <i data-feather="image" className="text-muted icon-md mb-2px"></i>
                                          <p className="text-muted ms-1">Photo</p>
                                        </div>
                                      </div>
                                      <div className="d-flex flex-column align-items-end">
                                        <p className="text-muted tx-13 mb-1">05:24 PM</p>
                                        <div className="badge rounded-pill bg-danger ms-auto">3</div>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li className="chat-item pe-1">
                                  <a href="javascript:;" className="d-flex align-items-center">
                                    <figure className="mb-0 me-2">
                                      <img src="https://via.placeholder.com/37x37" className="img-xs rounded-circle" alt="user"/>
                                      <div className="status offline"></div>
                                    </figure>
                                    <div className="d-flex justify-content-between flex-grow-1 border-bottom">
                                      <div>
                                        <p className="text-body">John Doe</p>
                                        <p className="text-muted tx-13">Hi, How are you?</p>
                                      </div>
                                      <div className="d-flex flex-column align-items-end">
                                        <p className="text-muted tx-13 mb-1">Yesterday</p>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li className="chat-item pe-1">
                                  <a href="javascript:;" className="d-flex align-items-center">
                                    <figure className="mb-0 me-2">
                                      <img src="https://via.placeholder.com/37x37" className="img-xs rounded-circle" alt="user"/>
                                      <div className="status online"></div>
                                    </figure>
                                    <div className="d-flex justify-content-between flex-grow-1 border-bottom">
                                      <div>
                                        <p className="text-body">Jensen Combs</p>
                                        <div className="d-flex align-items-center">
                                          <i data-feather="video" className="text-muted icon-md mb-2px"></i>
                                          <p className="text-muted ms-1">Video</p>
                                        </div>
                                      </div>
                                      <div className="d-flex flex-column align-items-end">
                                        <p className="text-muted tx-13 mb-1">2 days ago</p>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li className="chat-item pe-1">
                                  <a href="javascript:;" className="d-flex align-items-center">
                                    <figure className="mb-0 me-2">
                                      <img src="https://via.placeholder.com/37x37" className="img-xs rounded-circle" alt="user"/>
                                      <div className="status offline"></div>
                                    </figure>
                                    <div className="d-flex justify-content-between flex-grow-1 border-bottom">
                                      <div>
                                        <p className="text-body">Yaretzi Mayo</p>
                                        <p className="text-muted tx-13">Hi, How are you?</p>
                                      </div>
                                      <div className="d-flex flex-column align-items-end">
                                        <p className="text-muted tx-13 mb-1">4 week ago</p>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li className="chat-item pe-1">
                                  <a href="javascript:;" className="d-flex align-items-center">
                                    <figure className="mb-0 me-2">
                                      <img src="https://via.placeholder.com/37x37" className="img-xs rounded-circle" alt="user"/>
                                      <div className="status offline"></div>
                                    </figure>
                                    <div className="d-flex justify-content-between flex-grow-1 border-bottom">
                                      <div>
                                        <p className="text-body fw-bolder">John Doe</p>
                                        <p className="text-muted tx-13">Hi, How are you?</p>
                                      </div>
                                      <div className="d-flex flex-column align-items-end">
                                        <p className="text-muted tx-13 mb-1">4:32 PM</p>
                                        <div className="badge rounded-pill bg-primary ms-auto">5</div>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li className="chat-item pe-1">
                                  <a href="javascript:;" className="d-flex align-items-center">
                                    <figure className="mb-0 me-2">
                                      <img src="https://via.placeholder.com/37x37" className="img-xs rounded-circle" alt="user"/>
                                      <div className="status online"></div>
                                    </figure>
                                    <div className="d-flex justify-content-between flex-grow-1 border-bottom">
                                      <div>
                                        <p className="text-body fw-bolder">Leonardo Payne</p>
                                        <div className="d-flex align-items-center">
                                          <i data-feather="image" className="text-muted icon-md mb-2px"></i>
                                          <p className="text-muted ms-1">Photo</p>
                                        </div>
                                      </div>
                                      <div className="d-flex flex-column align-items-end">
                                        <p className="text-muted tx-13 mb-1">6:11 PM</p>
                                        <div className="badge rounded-pill bg-danger ms-auto">3</div>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li className="chat-item pe-1">
                                  <a href="javascript:;" className="d-flex align-items-center">
                                    <figure className="mb-0 me-2">
                                      <img src="https://via.placeholder.com/37x37" className="img-xs rounded-circle" alt="user"/>
                                      <div className="status online"></div>
                                    </figure>
                                    <div className="d-flex justify-content-between flex-grow-1 border-bottom">
                                      <div>
                                        <p className="text-body">John Doe</p>
                                        <p className="text-muted tx-13">Hi, How are you?</p>
                                      </div>
                                      <div className="d-flex flex-column align-items-end">
                                        <p className="text-muted tx-13 mb-1">Yesterday</p>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li className="chat-item pe-1">
                                  <a href="javascript:;" className="d-flex align-items-center">
                                    <figure className="mb-0 me-2">
                                      <img src="https://via.placeholder.com/37x37" className="img-xs rounded-circle" alt="user"/>
                                      <div className="status online"></div>
                                    </figure>
                                    <div className="d-flex justify-content-between flex-grow-1 border-bottom">
                                      <div>
                                        <p className="text-body">Leonardo Payne</p>
                                        <div className="d-flex align-items-center">
                                          <i data-feather="video" className="text-muted icon-md mb-2px"></i>
                                          <p className="text-muted ms-1">Video</p>
                                        </div>
                                      </div>
                                      <div className="d-flex flex-column align-items-end">
                                        <p className="text-muted tx-13 mb-1">2 days ago</p>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li className="chat-item pe-1">
                                  <a href="javascript:;" className="d-flex align-items-center">
                                    <figure className="mb-0 me-2">
                                      <img src="https://via.placeholder.com/37x37" className="img-xs rounded-circle" alt="user"/>
                                      <div className="status online"></div>
                                    </figure>
                                    <div className="d-flex justify-content-between flex-grow-1 border-bottom">
                                      <div>
                                        <p className="text-body">John Doe</p>
                                        <p className="text-muted tx-13">Hi, How are you?</p>
                                      </div>
                                      <div className="d-flex flex-column align-items-end">
                                        <p className="text-muted tx-13 mb-1">4 week ago</p>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="tab-pane fade" id="calls" role="tabpanel" aria-labelledby="calls-tab">
                            <p className="text-muted mb-1">Recent calls</p>
                            <ul className="list-unstyled chat-list px-1">
                              <li className="chat-item pe-1">
                                <a href="javascript:;" className="d-flex align-items-center">
                                  <figure className="mb-0 me-2">
                                    <img src="https://via.placeholder.com/37x37" className="img-xs rounded-circle" alt="user"/>
                                    <div className="status online"></div>
                                  </figure>
                                  <div className="d-flex align-items-center justify-content-between flex-grow-1 border-bottom">
                                    <div>
                                      <p className="text-body">Jensen Combs</p>
                                      <div className="d-flex align-items-center">
                                        <i data-feather="arrow-up-right" className="icon-sm text-success me-1"></i>
                                        <p className="text-muted tx-13">Today, 03:11 AM</p>
                                      </div>
                                    </div>
                                    <div className="d-flex flex-column align-items-end">
                                      <i data-feather="phone-call" className="text-primary icon-md"></i>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li className="chat-item pe-1">
                                <a href="javascript:;" className="d-flex align-items-center">
                                  <figure className="mb-0 me-2">
                                    <img src="https://via.placeholder.com/37x37" className="img-xs rounded-circle" alt="user"/>
                                    <div className="status offline"></div>
                                  </figure>
                                  <div className="d-flex align-items-center justify-content-between flex-grow-1 border-bottom">
                                    <div>
                                      <p className="text-body">Leonardo Payne</p>
                                      <div className="d-flex align-items-center">
                                        <i data-feather="arrow-down-left" className="icon-sm text-success me-1"></i>
                                        <p className="text-muted tx-13">Today, 11:41 AM</p>
                                      </div>
                                    </div>
                                    <div className="d-flex flex-column align-items-end">
                                      <i data-feather="video" className="text-primary icon-md"></i>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li className="chat-item pe-1">
                                <a href="javascript:;" className="d-flex align-items-center">
                                  <figure className="mb-0 me-2">
                                    <img src="https://via.placeholder.com/37x37" className="img-xs rounded-circle" alt="user"/>
                                    <div className="status offline"></div>
                                  </figure>
                                  <div className="d-flex align-items-center justify-content-between flex-grow-1 border-bottom">
                                    <div>
                                      <p className="text-body">Carl Henson</p>
                                      <div className="d-flex align-items-center">
                                        <i data-feather="arrow-down-left" className="icon-sm text-danger me-1"></i>
                                        <p className="text-muted tx-13">Today, 04:24 PM</p>
                                      </div>
                                    </div>
                                    <div className="d-flex flex-column align-items-end">
                                      <i data-feather="phone-call" className="text-primary icon-md"></i>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li className="chat-item pe-1">
                                <a href="javascript:;" className="d-flex align-items-center">
                                  <figure className="mb-0 me-2">
                                    <img src="https://via.placeholder.com/37x37" className="img-xs rounded-circle" alt="user"/>
                                    <div className="status online"></div>
                                  </figure>
                                  <div className="d-flex align-items-center justify-content-between flex-grow-1 border-bottom">
                                    <div>
                                      <p className="text-body">Jensen Combs</p>
                                      <div className="d-flex align-items-center">
                                        <i data-feather="arrow-down-left" className="icon-sm text-danger me-1"></i>
                                        <p className="text-muted tx-13">Today, 12:53 AM</p>
                                      </div>
                                    </div>
                                    <div className="d-flex flex-column align-items-end">
                                      <i data-feather="video" className="text-primary icon-md"></i>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li className="chat-item pe-1">
                                <a href="javascript:;" className="d-flex align-items-center">
                                  <figure className="mb-0 me-2">
                                    <img src="https://via.placeholder.com/37x37" className="img-xs rounded-circle" alt="user"/>
                                    <div className="status online"></div>
                                  </figure>
                                  <div className="d-flex align-items-center justify-content-between flex-grow-1 border-bottom">
                                    <div>
                                      <p className="text-body">John Doe</p>
                                      <div className="d-flex align-items-center">
                                        <i data-feather="arrow-down-left" className="icon-sm text-success me-1"></i>
                                        <p className="text-muted tx-13">Today, 01:42 AM</p>
                                      </div>
                                    </div>
                                    <div className="d-flex flex-column align-items-end">
                                      <i data-feather="video" className="text-primary icon-md"></i>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li className="chat-item pe-1">
                                <a href="javascript:;" className="d-flex align-items-center">
                                  <figure className="mb-0 me-2">
                                    <img src="https://via.placeholder.com/37x37" className="img-xs rounded-circle" alt="user"/>
                                    <div className="status offline"></div>
                                  </figure>
                                  <div className="d-flex align-items-center justify-content-between flex-grow-1 border-bottom">
                                    <div>
                                      <p className="text-body">John Doe</p>
                                      <div className="d-flex align-items-center">
                                        <i data-feather="arrow-up-right" className="icon-sm text-success me-1"></i>
                                        <p className="text-muted tx-13">Today, 12:01 AM</p>
                                      </div>
                                    </div>
                                    <div className="d-flex flex-column align-items-end">
                                      <i data-feather="phone-call" className="text-primary icon-md"></i>
                                    </div>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane fade" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
                            <p className="text-muted mb-1">Contacts</p>
                            <ul className="list-unstyled chat-list px-1">
                              <li className="chat-item pe-1">
                                <a href="javascript:;" className="d-flex align-items-center">
                                  <figure className="mb-0 me-2">
                                    <img src="https://via.placeholder.com/37x37" className="img-xs rounded-circle" alt="user"/>
                                    <div className="status offline"></div>
                                  </figure>
                                  <div className="d-flex align-items-center justify-content-between flex-grow-1 border-bottom">
                                    <div>
                                      <p className="text-body">Amiah Burton</p>
                                      <div className="d-flex align-items-center">
                                        <p className="text-muted tx-13">Front-end Developer</p>
                                      </div>
                                    </div>
                                    <div className="d-flex align-items-end text-body">
                                      <i data-feather="message-square" className="icon-md text-primary me-2"></i>
                                      <i data-feather="phone-call" className="icon-md text-primary me-2"></i>
                                      <i data-feather="video" className="icon-md text-primary"></i>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li className="chat-item pe-1">
                                <a href="javascript:;" className="d-flex align-items-center">
                                  <figure className="mb-0 me-2">
                                    <img src="https://via.placeholder.com/37x37" className="img-xs rounded-circle" alt="user"/>
                                    <div className="status online"></div>
                                  </figure>
                                  <div className="d-flex align-items-center justify-content-between flex-grow-1 border-bottom">
                                    <div>
                                      <p className="text-body">John Doe</p>
                                      <div className="d-flex align-items-center">
                                        <p className="text-muted tx-13">Back-end Developer</p>
                                      </div>
                                    </div>
                                    <div className="d-flex align-items-end text-body">
                                      <i data-feather="message-square" className="icon-md text-primary me-2"></i>
                                      <i data-feather="phone-call" className="icon-md text-primary me-2"></i>
                                      <i data-feather="video" className="icon-md text-primary"></i>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li className="chat-item pe-1">
                                <a href="javascript:;" className="d-flex align-items-center">
                                  <figure className="mb-0 me-2">
                                    <img src="https://via.placeholder.com/37x37" className="img-xs rounded-circle" alt="user"/>
                                    <div className="status offline"></div>
                                  </figure>
                                  <div className="d-flex align-items-center justify-content-between flex-grow-1 border-bottom">
                                    <div>
                                      <p className="text-body">Yaretzi Mayo</p>
                                      <div className="d-flex align-items-center">
                                        <p className="text-muted tx-13">Fullstack Developer</p>
                                      </div>
                                    </div>
                                    <div className="d-flex align-items-end text-body">
                                      <i data-feather="message-square" className="icon-md text-primary me-2"></i>
                                      <i data-feather="phone-call" className="icon-md text-primary me-2"></i>
                                      <i data-feather="video" className="icon-md text-primary"></i>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li className="chat-item pe-1">
                                <a href="javascript:;" className="d-flex align-items-center">
                                  <figure className="mb-0 me-2">
                                    <img src="https://via.placeholder.com/37x37" className="img-xs rounded-circle" alt="user"/>
                                    <div className="status offline"></div>
                                  </figure>
                                  <div className="d-flex align-items-center justify-content-between flex-grow-1 border-bottom">
                                    <div>
                                      <p className="text-body">John Doe</p>
                                      <div className="d-flex align-items-center">
                                        <p className="text-muted tx-13">Front-end Developer</p>
                                      </div>
                                    </div>
                                    <div className="d-flex align-items-end text-body">
                                      <i data-feather="message-square" className="icon-md text-primary me-2"></i>
                                      <i data-feather="phone-call" className="icon-md text-primary me-2"></i>
                                      <i data-feather="video" className="icon-md text-primary"></i>
                                    </div>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 chat-content">
                    <div className="chat-header border-bottom pb-2">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          <i data-feather="corner-up-left" id="backToChatList" className="icon-lg me-2 ms-n2 text-muted d-lg-none"></i>
                          <figure className="mb-0 me-2">
                            <img src="https://via.placeholder.com/43x43" className="img-sm rounded-circle" alt="image"/>
                            <div className="status online"></div>
                            <div className="status online"></div>
                          </figure>
                          <div>
                            <p>Mariana Zenha</p>
                            <p className="text-muted tx-13">Front-end Developer</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center me-n1">
                          <a href="#">
                            <i data-feather="video" className="icon-lg text-muted me-3" data-bs-toggle="tooltip" title="Start video call"></i>
                          </a>
                          <a href="#">
                            <i data-feather="phone-call" className="icon-lg text-muted me-0 me-sm-3" data-bs-toggle="tooltip" title="Start voice call"></i>
                          </a>
                          <a href="#" className="d-none d-sm-block">
                            <i data-feather="user-plus" className="icon-lg text-muted" data-bs-toggle="tooltip" title="Add to contacts"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="chat-body">
                      <ul className="messages">
                        <li className="message-item friend">
                          <img src="https://via.placeholder.com/36x36" className="img-xs rounded-circle" alt="avatar"/>
                          <div className="content">
                            <div className="message">
                              <div className="bubble">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                              </div>
                              <span>8:12 PM</span>
                            </div>
                          </div>
                        </li>
                        <li className="message-item me">
                          <img src="https://via.placeholder.com/36x36" className="img-xs rounded-circle" alt="avatar"/>
                          <div className="content">
                            <div className="message">
                              <div className="bubble">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry.</p>
                              </div>
                            </div>
                            <div className="message">
                              <div className="bubble">
                                <p>Lorem Ipsum.</p>
                              </div>
                              <span>8:13 PM</span>
                            </div>
                          </div>
                        </li>
                        <li className="message-item friend">
                          <img src="https://via.placeholder.com/36x36" className="img-xs rounded-circle" alt="avatar"/>
                          <div className="content">
                            <div className="message">
                              <div className="bubble">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                              </div>
                              <span>8:15 PM</span>
                            </div>
                          </div>
                        </li>
                        <li className="message-item me">
                          <img src="https://via.placeholder.com/36x36" className="img-xs rounded-circle" alt="avatar"/>
                          <div className="content">
                            <div className="message">
                              <div className="bubble">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry.</p>
                              </div>
                              <span>8:15 PM</span>
                            </div>
                          </div>
                        </li>
                        <li className="message-item friend">
                          <img src="https://via.placeholder.com/36x36" className="img-xs rounded-circle" alt="avatar"/>
                          <div className="content">
                            <div className="message">
                              <div className="bubble">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                              </div>
                              <span>8:17 PM</span>
                            </div>
                          </div>
                        </li>
                        <li className="message-item me">
                          <img src="https://via.placeholder.com/36x36" className="img-xs rounded-circle" alt="avatar"/>
                          <div className="content">
                            <div className="message">
                              <div className="bubble">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry.</p>
                              </div>
                            </div>
                            <div className="message">
                              <div className="bubble">
                                <p>Lorem Ipsum.</p>
                              </div>
                              <span>8:18 PM</span>
                            </div>
                          </div>
                        </li>
                        <li className="message-item friend">
                          <img src="https://via.placeholder.com/36x36" className="img-xs rounded-circle" alt="avatar"/>
                          <div className="content">
                            <div className="message">
                              <div className="bubble">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                              </div>
                              <span>8:22 PM</span>
                            </div>
                          </div>
                        </li>
                        <li className="message-item me">
                          <img src="https://via.placeholder.com/36x36" className="img-xs rounded-circle" alt="avatar"/>
                          <div className="content">
                            <div className="message">
                              <div className="bubble">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry.</p>
                              </div>
                              <span>8:30 PM</span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="chat-footer d-flex">
                      <div>
                        <button type="button" className="btn border btn-icon rounded-circle me-2" data-bs-toggle="tooltip" title="Emoji">
                          <i data-feather="smile" className="text-muted"></i>
                        </button>
                      </div>
                      <div className="d-none d-md-block">
                        <button type="button" className="btn border btn-icon rounded-circle me-2" data-bs-toggle="tooltip" title="Attatch files">
                          <i data-feather="paperclip" className="text-muted"></i>
                        </button>
                      </div>
                      <div className="d-none d-md-block">
                        <button type="button" className="btn border btn-icon rounded-circle me-2" data-bs-toggle="tooltip" title="Record you voice">
                          <i data-feather="mic" className="text-muted"></i>
                        </button>
                      </div>
                      <form className="search-form flex-grow-1 me-2">
                        <div className="input-group">
                          <input type="text" className="form-control rounded-pill" id="chatForm" placeholder="Type a message"/>
                        </div>
                      </form>
                      <div>
                        <button type="button" className="btn btn-primary btn-icon rounded-circle">
                          <i data-feather="send"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
					</div>
				</div>
			</div>



        );
}
