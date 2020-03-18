import React, { Component } from 'react'

export class Landing extends Component {
    render() {
        return (
            <>
                <div class="loader">
                    <div class="loading-animation"></div>
                </div>
                <div class="navbar-container bg-primary-3">
                <nav class="navbar navbar-expand-lg navbar-dark" data-sticky="top">
                    <div class="container">
                    <a class="navbar-brand navbar-brand-dynamic-color fade-page" href="index.html">
                        <img alt="Chatchilla" data-inject-svg src={require("../assets/img/logos/chatchilla-logo.svg")} />
                    </a>
                    <div class="d-flex align-items-center order-lg-3">
                        <a href="#" class="btn btn-primary ml-lg-4 mr-3 mr-md-4 mr-lg-0 d-none d-sm-block order-lg-3">Sign Up</a>
                        <button aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-target=".navbar-collapse" data-toggle="collapse" type="button">
                        <img alt="Navbar Toggler Open Icon" class="navbar-toggler-open icon icon-sm" data-inject-svg src={require("../assets/img/icons/interface/icon-menu.svg")} />
                        <img alt="Navbar Toggler Close Icon" class="navbar-toggler-close icon icon-sm" data-inject-svg src={require("../assets/img/icons/interface/icon-x.svg")} />
                        </button>
                    </div>
                    <div class="collapse navbar-collapse order-3 order-lg-2 justify-content-lg-end" id="navigation-menu">
                        <ul class="navbar-nav my-3 my-lg-0">
                        <li class="nav-item">
                            <div class="dropdown">
                            <a aria-expanded="false" aria-haspopup="true" class="nav-link fade-page px-0 py-2" data-toggle="dropdown-grid" href="#" role="button">Sign In</a>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
                </div>

                <section class="bg-primary-3 text-white pb-0 o-hidden">
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                    <div class="col-xl-5 col-lg-6 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-aos="fade-right">
                        <h1 class="display-3">Your customers are always talking.</h1>
                        <p class="lead">Let Chatchilla keep you in the conversation.</p>
                        <a href="#" class="btn btn-lg btn-primary">Sign Up Now</a>
                    </div>
                    <div class="col" data-aos="fade-left" data-aos-delay="250">
                        <img src={require("../assets/img/desktop-app/desktop-app-2.png")} alt="Screenshot" class="img-fluid rounded shadow-lg border" />
                    </div>
                    </div>
                </div>
                <div class="w-50 h-50 bottom right position-absolute" data-jarallax-element="50">
                    <div class="blob blob-2 bg-gradient w-100 h-100"></div>
                </div>
                <div class="w-50 h-50 bottom right position-absolute" data-jarallax-element="75">
                    <div class="blob blob-4 bg-white opacity-10 w-100 h-100"></div>
                </div>
                <div class="divider divider-bottom bg-white"></div>
                </section>
                <section>
                <div class="container">
                    <div class="row">
                    <div class="col-md-4 mb-4 mb-md-0">
                        <div>
                        <img src={require("../assets/img/icons/theme/general/thunder-move.svg")} alt="Lightning icon" class="icon bg-primary" data-inject-svg />
                        <h5 class="mt-4">Built with your time in mind.</h5>
                        <div>
                            Chatchilla is built to be fast: from setup to conversation.
                        </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4 mb-md-0">
                        <div>
                        <img src={require("../assets/img/icons/theme/general/bookmark.svg")} alt="Bookmark icon" class="icon bg-primary" data-inject-svg />
                        <h5 class="mt-4">Well Documented</h5>
                        <div>
                            Duis convallis convallis tellus imp interdum. Non diam phasellus vestibulum lorem sed risus ultricies Tyrion. Enim blandit volutpat.
                        </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4 mb-md-0">
                        <div>
                        <img src={require("../assets/img/icons/theme/design/select.svg")} alt="Selection interface icon" class="icon bg-primary" data-inject-svg />
                        <h5 class="mt-4">Highly Customizable</h5>
                        <div>
                            Eunuch sed blandit libero volutpat sed cras. Cersei quis imperdiet tincidunt unuch pulvinar sapien. Habitasse platea Davos vestibulum.
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                <section class="bg-light o-hidden">
                <div class="container">
                    <div class="row section-title justify-content-center text-center">
                    <div class="col-md-9 col-lg-8 col-xl-7">
                        <h3 class="display-4">Great Functionality</h3>
                        <div class="lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</div>
                    </div>
                    </div>
                    <div class="container">
                    <div class="row">
                        <div class="col">
                        <ul class="nav nav-pills lead mb-4 mb-md-5 justify-content-center" id="myTab" role="tablist">
                            <li class="nav-item">
                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Groups</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Dark Mode</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Feed</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div class="row align-items-center justify-content-between flex-lg-row-reverse">
                                <div class="col-lg-6 col-xl-5 text-center text-lg-left mb-4 mb-md-5 mb-lg-0">
                                <div class="pl-lg-4 pr-xl-5" data-aos="fade-right">
                                    <h3 class="h1">A great feature you'll <mark data-aos="highlight-text"
                                                            data-aos-delay="250">love to use</mark></h3>
                                    <p>
                                    Ned ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
                                    </p>
                                    <div class="mt-4">
                                    <div class="media rounded align-items-center pl-3 pr-3 pr-md-4 py-2 d-inline-flex text-left shadow-sm bg-white">
                                        <img src={require("../assets/img/avatars/male-4.jpg")} alt="Harvey Derwent avatar image" class="avatar avatar-sm flex-shrink-0 mr-3" />
                                        <div class="text-dark mb-0">&ldquo;We are working at almost twice the capacity&rdquo;</div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div class="col-lg-6 col-xl-7" data-aos="fade-left">
                                <img src={require("../assets/img/desktop-app/desktop-app-3.jpg")} alt="Screenshot" class="img-fluid rounded shadow border" />
                                </div>
                            </div>
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div class="row align-items-center justify-content-around">
                                <div class="col-lg-6 col-xl-5 text-center text-lg-left mb-4 mb-md-5 mb-lg-0">
                                <div class="pr-lg-4 pr-xl-5" data-aos="fade-right">
                                    <h3 class="h1">Easy on the eyes, and the wallet.</h3>
                                    <p>
                                    Ned ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
                                    </p>
                                    <div class="mt-4">
                                    <div class="media rounded align-items-center pl-3 pr-3 pr-md-4 py-2 d-inline-flex text-left shadow-sm bg-white">
                                        <img src={require("../assets/img/avatars/male-1.jpg")} alt="Harvey Derwent avatar image" class="avatar avatar-sm flex-shrink-0 mr-3" />
                                        <div class="text-dark mb-0">&ldquo;Jumpstart increases productivity.&rdquo;</div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div class="col-lg-6 col-xl-7" data-aos="fade-left">
                                <img src={require("../assets/img/desktop-app/desktop-app-1.jpg")} alt="Screenshot" class="img-fluid rounded shadow border" />
                                </div>
                            </div>
                            </div>
                            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            <div class="row align-items-center justify-content-around">
                                <div class="col-lg-6 col-xl-5 text-center text-lg-left mb-4 mb-md-5 mb-lg-0">
                                <div class="pr-lg-4 pr-xl-5" data-aos="fade-right">
                                    <h3 class="h1">You’ll Stay right up to date, <mark data-aos="highlight-text"
                                                            data-aos-delay="250">ever</mark>.</h3>
                                    <p>
                                    Ned ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
                                    </p>
                                    <div class="mt-4">
                                    <div class="media rounded align-items-center pl-3 pr-3 pr-md-4 py-2 d-inline-flex text-left shadow-sm bg-white">
                                        <img src={require("../assets/img/avatars/female-4.jpg")} alt="Ashley Mance avatar image" class="avatar avatar-sm flex-shrink-0 mr-3" />
                                        <div class="text-dark mb-0">&ldquo;Jumpstart is a dream come true.&rdquo;</div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div class="col-lg-6 col-xl-7" data-aos="fade-left">
                                <img src={require("../assets/img/desktop-app/desktop-app-2.jpg")} alt="Screenshot" class="img-fluid rounded shadow border" />
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                <section class="bg-light pt-0">
                <div class="container">
                    <div class="row">
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card card-body shadow-sm h-100">
                        <div class="display-4 text-primary mb-3" data-countup data-start="" data-end="97" data-duration="" data-decimal-places="" data-prefix="" data-separator="" data-grouping="" data-suffix="%" data-easing=""></div>
                        <div>Average satisfaction rating received in the past year</div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card card-body shadow-sm h-100">
                        <div class="display-4 text-primary mb-3" data-countup data-start="20" data-end="24" data-duration="1" data-decimal-places="" data-prefix="" data-separator="" data-grouping="" data-suffix="/7" data-easing="false"></div>
                        <div>Our support experts are ready to assist anytime</div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card card-body shadow-sm h-100">
                        <div class="display-4 text-primary mb-3" data-countup data-start="" data-end="142" data-duration="" data-decimal-places="" data-prefix="" data-separator="" data-grouping="" data-suffix="k+" data-easing=""></div>
                        <div>App installs from the two major mobile app stores</div>
                        </div>
                    </div>

                    </div>
                </div>
                </section>
                <section class="bg-gradient text-white pb-0">
                <div class="container">
                    <div class="row section-title justify-content-center text-center">
                    <div class="col-md-9 col-lg-8 col-xl-7">
                        <h3 class="display-4">Less work, <mark data-aos="highlight-text" data-aos-delay="250">more flow.</mark></h3>
                        <div class="lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</div>
                    </div>
                    </div>
                    <div class="row justify-content-center">
                    <div class="col-xl-9 d-flex flex-wrap justify-content-center">
                        <div class="m-2">
                        <div class="media rounded align-items-center px-3 px-md-4 py-2 py-md-3 bg-white text-dark">
                            <img src={require("../assets/img/logos/product/kyan.svg")} alt="Kyan logo" class="icon icon-sm mr-3" />
                            <h5 class="mb-0">Kyan Boards</h5>
                        </div>
                        </div>
                        <div class="m-2">
                        <div class="media rounded align-items-center px-3 px-md-4 py-2 py-md-3 bg-white text-dark">
                            <img src={require("../assets/img/logos/product/atica.svg")} alt="Atica logo" class="icon icon-sm mr-3" />
                            <h5 class="mb-0">Atica</h5>
                        </div>
                        </div>
                        <div class="m-2">
                        <div class="media rounded align-items-center px-3 px-md-4 py-2 py-md-3 bg-white text-dark">
                            <img src={require("../assets/img/logos/product/treva.svg")} alt="Treva logo" class="icon icon-sm mr-3" />
                            <h5 class="mb-0">Treva</h5>
                        </div>
                        </div>
                        <div class="m-2">
                        <div class="media rounded align-items-center px-3 px-md-4 py-2 py-md-3 bg-white text-dark">
                            <img src={require("../assets/img/logos/product/kanba.svg")} alt="Kanba logo" class="icon icon-sm mr-3" />
                            <h5 class="mb-0">Kanba</h5>
                        </div>
                        </div>
                        <div class="m-2">
                        <div class="media rounded align-items-center px-3 px-md-4 py-2 py-md-3 bg-white text-dark">
                            <img src={require("../assets/img/logos/product/tvit.svg")} alt="Tvit logo" class="icon icon-sm mr-3" />
                            <h5 class="mb-0">Tvit Forms</h5>
                        </div>
                        </div>
                        <div class="m-2">
                        <div class="media rounded align-items-center px-3 px-md-4 py-2 py-md-3 bg-white text-dark">
                            <img src={require("../assets/img/logos/product/aven.svg")} alt="Aven logo" class="icon icon-sm mr-3" />
                            <h5 class="mb-0">Aven</h5>
                        </div>
                        </div>
                        <div class="m-2">
                        <div class="media rounded align-items-center px-3 px-md-4 py-2 py-md-3 bg-white text-dark">
                            <img src={require("../assets/img/logos/product/utosia.svg")} alt="Utosia logo" class="icon icon-sm mr-3" />
                            <h5 class="mb-0">Utosia</h5>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="divider divider-bottom bg-light"></div>
                </section>
                <section class="bg-light">
                <div class="container">
                    <div>
                    <div class="row section-title justify-content-center text-center">
                        <div class="col-md-9 col-lg-8 col-xl-7">
                        <h3 class="display-4">Scales with your business</h3>
                        <div class="lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</div>
                        </div>
                    </div>
                    </div>
                    <div class="row justify-content-center align-items-center">
                    <div class="col-sm-9 col-md-7 col-lg-4 mb-3 mb-md-4 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
                        <div class="card card-body align-items-center shadow">

                        <div class="text-center mb-4">
                            <h4>Basic</h4>
                            <div class="d-flex align-items-center justify-content-center mb-1">
                            <span class="h5 mb-0 mr-2">$</span>
                            <span class="display-3 mb-0 text-dark">19</span>
                            </div>
                            <div>Per user, per month</div>
                        </div>
                        <ul class="list-unstyled p-0">
                            <li class="my-3">
                            <div class="d-flex align-items-center">
                                <div class="rounded-circle bg-success-alt">
                                <img src={require("../assets/img/icons/interface/icon-check.svg")} alt=" icon=" class="m-2 icon icon-xs bg-success" data-inject-svg />
                                </div>
                                <h6 class="mb-0 ml-3">2GB Cloud Storage</h6>
                            </div>
                            </li>
                            <li class="my-3">
                            <div class="d-flex align-items-center">
                                <div class="rounded-circle bg-success-alt">
                                <img src={require("../assets/img/icons/interface/icon-check.svg")} alt=" icon=" class="m-2 icon icon-xs bg-success" data-inject-svg />
                                </div>
                                <h6 class="mb-0 ml-3">100GB CDN Bandwidth</h6>
                            </div>
                            </li>
                            <li class="my-3">
                            <div class="d-flex align-items-center">
                                <div class="rounded-circle bg-success-alt">
                                <img src={require("../assets/img/icons/interface/icon-check.svg")} alt=" icon=" class="m-2 icon icon-xs bg-success" data-inject-svg />
                                </div>
                                <h6 class="mb-0 ml-3">98.88% Uptime Guarantee</h6>
                            </div>
                            </li>
                            <li class="my-3 opacity-50">
                            <div class="d-flex align-items-center">
                                <div class="rounded-circle bg-danger-alt">
                                <img src={require("../assets/img/icons/interface/icon-x.svg")} alt=" icon=" class="m-2 icon icon-xs bg-danger" data-inject-svg />
                                </div>
                                <h6 class="mb-0 ml-3">Personal Account Manager</h6>
                            </div>
                            </li>
                            <li class="my-3 opacity-50">
                            <div class="d-flex align-items-center">
                                <div class="rounded-circle bg-danger-alt">
                                <img src={require("../assets/img/icons/interface/icon-x.svg")} alt=" icon=" class="m-2 icon icon-xs bg-danger" data-inject-svg />
                                </div>
                                <h6 class="mb-0 ml-3">Enterprise SLA</h6>
                            </div>
                            </li>
                        </ul>
                        <a href="#" class="btn btn-lg btn-block btn-outline-primary">Start with Basic</a>
                        </div>
                    </div>
                    <div class="col-sm-9 col-md-7 col-lg-4 mb-3 mb-md-4 mb-lg-0" data-aos="fade-up" data-aos-delay="200">
                        <div class="card card-body align-items-center shadow">
                        <div class="badge badge-success badge-pill mb-4">Best Value</div>
                        <div class="text-center mb-4">
                            <h4>Premium</h4>
                            <div class="d-flex align-items-center justify-content-center mb-1">
                            <span class="h5 mb-0 mr-2">$</span>
                            <span class="display-3 mb-0 text-dark">29</span>
                            </div>
                            <div>Per user, per month</div>
                        </div>
                        <ul class="list-unstyled p-0">
                            <li class="my-3">
                            <div class="d-flex align-items-center">
                                <div class="rounded-circle bg-success-alt">
                                <img src={require("../assets/img/icons/interface/icon-check.svg")} alt=" icon=" class="m-2 icon icon-xs bg-success" data-inject-svg />
                                </div>
                                <h6 class="mb-0 ml-3">20GB Cloud Storage</h6>
                            </div>
                            </li>
                            <li class="my-3">
                            <div class="d-flex align-items-center">
                                <div class="rounded-circle bg-success-alt">
                                <img src={require("../assets/img/icons/interface/icon-check.svg")} alt=" icon=" class="m-2 icon icon-xs bg-success" data-inject-svg />
                                </div>
                                <h6 class="mb-0 ml-3">1TB CDN Bandwidth</h6>
                            </div>
                            </li>
                            <li class="my-3">
                            <div class="d-flex align-items-center">
                                <div class="rounded-circle bg-success-alt">
                                <img src={require("../assets/img/icons/interface/icon-check.svg")} alt=" icon=" class="m-2 icon icon-xs bg-success" data-inject-svg />
                                </div>
                                <h6 class="mb-0 ml-3">99.95% Uptime Guarantee</h6>
                            </div>
                            </li>
                            <li class="my-3">
                            <div class="d-flex align-items-center">
                                <div class="rounded-circle bg-success-alt">
                                <img src={require("../assets/img/icons/interface/icon-check.svg")} alt=" icon=" class="m-2 icon icon-xs bg-success" data-inject-svg />
                                </div>
                                <h6 class="mb-0 ml-3">Personal Account Manager</h6>
                            </div>
                            </li>
                            <li class="my-3 opacity-50">
                            <div class="d-flex align-items-center">
                                <div class="rounded-circle bg-danger-alt">
                                <img src={require("../assets/img/icons/interface/icon-x.svg")} alt=" icon=" class="m-2 icon icon-xs bg-danger" data-inject-svg />
                                </div>
                                <h6 class="mb-0 ml-3">Enterprise SLA</h6>
                            </div>
                            </li>
                        </ul>
                        <a href="#" class="btn btn-lg btn-block btn-primary">Start with Premium</a>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                <section class="p-0">
                <div class="divider divider-top bg-light transform-flip-x"></div>
                <div class="container">
                    <div class="row section-title justify-content-center text-center">
                    <div class="col-md-9 col-lg-8 col-xl-7">
                        <h3 class="display-4">FAQ</h3>
                        <div class="lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</div>
                    </div>
                    </div>
                    <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-8">
                        <div id="faq-accordion">
                        <div class="card mb-2 mb-md-3">
                            <a href="#accordion-1" data-toggle="collapse" role="button" aria-expanded="false" class="p-3 p-md-4">
                            <div class="d-flex justify-content-between align-items-center">
                                <h6 class="mb-0 mr-2">Can I upgrade later on?</h6>
                                <img src={require("../assets/img/icons/interface/icon-caret-right.svg")} alt="Caret Right" class="icon icon-sm" data-inject-svg />
                            </div>
                            </a>
                            <div class="collapse" id="accordion-1" data-parent="#faq-accordion">
                            <div class="px-3 px-md-4 pb-3 pb-md-4">
                                Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre. Vivamus ornare pharetra diam sit amet tincidunt. Eunuch sit amet pharetra odio. Vivamus in tempor ipsum, sit amet elementum neque. Sed faucibus posuere pharetra.
                                In imperdiet eleifend dui a aliquet. Aliquam imperdiet Tyrion purus vitae rutrum. Donec eu commodo nunc. Mauris dignissim lectus massa, eget cursus quam mollis id. Eddard sit amet ex Jon nibh maximus cursus at vitae mi. Duis tincidunt
                                aliquam mi sed sagittis.

                            </div>
                            </div>
                        </div>
                        <div class="card mb-2 mb-md-3">
                            <a href="#accordion-2" data-toggle="collapse" role="button" aria-expanded="false" class="p-3 p-md-4">
                            <div class="d-flex justify-content-between align-items-center">
                                <h6 class="mb-0 mr-2">Can I port my data from another provider?</h6>
                                <img src={require("../assets/img/icons/interface/icon-caret-right.svg")} alt="Caret Right" class="icon icon-sm" data-inject-svg />
                            </div>
                            </a>
                            <div class="collapse" id="accordion-2" data-parent="#faq-accordion">
                            <div class="px-3 px-md-4 pb-3 pb-md-4">
                                Eunuch nec dapibus ex. Aenean placerat, ex imp convallis dictum, ex nulla rutrum justo, Jon lobortis nisi ex at leo. Sed Tyrion aliquet sem vel pharetra. Vestibulum ante ipsum primis in faucibus Hodor luctus et ultrices posuere cubilia Curae; Class aptent
                                taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis a sapien quis quam auctor feugiat. Donec volutpat condimentum risus, eu iaculis nibh dapibus eu.

                            </div>
                            </div>
                        </div>
                        <div class="card mb-2 mb-md-3">
                            <a href="#accordion-3" data-toggle="collapse" role="button" aria-expanded="false" class="p-3 p-md-4">
                            <div class="d-flex justify-content-between align-items-center">
                                <h6 class="mb-0 mr-2">Are my food photos stored forever in the cloud?</h6>
                                <img src={require("../assets/img/icons/interface/icon-caret-right.svg")} alt="Caret Right" class="icon icon-sm" data-inject-svg />
                            </div>
                            </a>
                            <div class="collapse" id="accordion-3" data-parent="#faq-accordion">
                            <div class="px-3 px-md-4 pb-3 pb-md-4">
                                Volantisi fringilla, unuch eu sagittis sagittis, urna Loras luctus odio, vitae hendrerit massa dui ac est. Donec leo tortor, Tyrion et aliquet at, convallis imp mi. Vivamus turpis diam, ultrices et tempus quis, sollicitudin et risus. Pellentesque nec
                                sapien imp dolor condimentum condimentum ut sed neque. Integer efficitur accumsan risus, vitae posuere massa aliquam at.

                            </div>
                            </div>
                        </div>
                        <div class="card mb-2 mb-md-3">
                            <a href="#accordion-4" data-toggle="collapse" role="button" aria-expanded="false" class="p-3 p-md-4">
                            <div class="d-flex justify-content-between align-items-center">
                                <h6 class="mb-0 mr-2">Who foots the bill for that?</h6>
                                <img src={require("../assets/img/icons/interface/icon-caret-right.svg")} alt="Caret Right" class="icon icon-sm" data-inject-svg />
                            </div>
                            </a>
                            <div class="collapse" id="accordion-4" data-parent="#faq-accordion">
                            <div class="px-3 px-md-4 pb-3 pb-md-4">
                                Khaleesi ornare pharetra diam sit amet tincidunt. Eunuch sit amet pharetra odio. Vivamus in tempor ipsum, sit amet elementum neque. Sed faucibus posuere pharetra. In imperdiet eleifend dui a aliquet. Aliquam imperdiet Tyrion purus vitae rutrum. Donec
                                eu commodo nunc. Vivamus Melisandre Jon lorem eget bibendum. Sed tincidunt sed enim at dignissim. Mauris erat diam, lacinia eget efficitur et, iaculis sed augue.

                            </div>
                            </div>
                        </div>
                        <div class="card mb-2 mb-md-3">
                            <a href="#accordion-5" data-toggle="collapse" role="button" aria-expanded="false" class="p-3 p-md-4">
                            <div class="d-flex justify-content-between align-items-center">
                                <h6 class="mb-0 mr-2">What's the real cost?</h6>
                                <img src={require("../assets/img/icons/interface/icon-caret-right.svg")} alt="Caret Right" class="icon icon-sm" data-inject-svg />
                            </div>
                            </a>
                            <div class="collapse" id="accordion-5" data-parent="#faq-accordion">
                            <div class="px-3 px-md-4 pb-3 pb-md-4">
                                Brienne ac maximus Loras, eu placerat odio. Etiam vestibulum Loras et sollicitudin pellentesque. Mauris sed Tyrion Varys. Curabitur posuere augue risus, eget mollis unuch consectetur quis. Vestibulum accumsan congue risus, in semper eros interdum id.
                                Tincidunt vitae libero efficitur viverra. Integer venenatis massa in dui viverra fermentum. Eunuch fringilla arcu ac urna sodales fermentum. Ut luctus enim ut sagittis consectetur.

                            </div>
                            </div>
                        </div>
                        <div class="card mb-2 mb-md-3">
                            <a href="#accordion-6" data-toggle="collapse" role="button" aria-expanded="false" class="p-3 p-md-4">
                            <div class="d-flex justify-content-between align-items-center">
                                <h6 class="mb-0 mr-2">Can my company request a custom plan?</h6>
                                <img src={require("../assets/img/icons/interface/icon-caret-right.svg")} alt="Caret Right" class="icon icon-sm" data-inject-svg />
                            </div>
                            </a>
                            <div class="collapse" id="accordion-6" data-parent="#faq-accordion">
                            <div class="px-3 px-md-4 pb-3 pb-md-4">
                                Brienne ac maximus Loras, eu placerat odio. Etiam vestibulum Loras et sollicitudin pellentesque. Mauris sed Tyrion Varys. Curabitur posuere augue risus, eget mollis unuch consectetur quis. Vestibulum accumsan congue risus, in semper eros interdum id.

                            </div>
                            </div>
                        </div>
                        </div>

                    </div>
                    </div>
                    <div class="row justify-content-center mt-4 mt-md-5">
                    <div class="col-auto">
                        <div class="alert bg-light">Still have unanswered questions? <a href="#">Get
                                    in touch</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="divider divider-bottom bg-primary-3"></div>
                </section>

                <footer class="bg-primary-3 text-white links-white pb-4 footer-1">
                <div class="container">

                    <div class="row">
                    <div class="col">
                        <hr />
                    </div>
                    </div>
                    <div class="row flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-between text-center text-lg-left">
                    <div class="col-auto">
                        <div class="d-flex flex-column flex-sm-row align-items-center text-small">
                        <div class="text-muted">&copy; 2020 Page protected by reCAPTCHA and subject to Google's <a href="https://www.google.com/policies/privacy/" target="_blank">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </footer>
                <a href="#top" class="btn btn-primary rounded-circle btn-back-to-top" data-smooth-scroll data-aos="fade-up" data-aos-offset="2000" data-aos-mirror="true" data-aos-once="false">
                <img src={require("../assets/img/icons/interface/icon-arrow-up.svg")} alt="Icon" class="icon bg-white" data-inject-svg />
                </a>

            </>
        )
    }
}

export default Landing
