import React from 'react';

const Info = () => {
  return (
    <>
      <div className="container col-lg-6 col-12 ps-sm-5">
        <h1 className="display-4 fw-normal">
          Efficient learning, made simpler.
        </h1>
        <p className="fs-5">
          Our cloud-based project management tool will enable you to attain
          optimum performance through precise tracking and effective networking
        </p>

        {/* buttons start */}
        <div
          className="
                        row
                        row-cols-lg-2
                        row-cols-md-2
                        row-cols-xl-2
                        row-cols-xxl-2
                        row-cols-1
                    "
        >
          {/* get started button star */}
          <div className="col-12 col-lg-6">
            <button
              type="button"
              className="
                                btn btn-primary btn-lg
                                w-100
                                mt-2
                                mb-2 mb-md-5
                            "
            >
              Get started
            </button>
          </div>
          {/* get started button end */}

          {/* see how it works button start */}
          <div className="col-12 col-lg-6">
            <button
              type="button"
              className="
                                btn btn-outline-warning
                                seehowitworks
                                btn-lg
                                bg-transparent
                                w-100
                                mt-2
                                mb-2 mb-md-5
                            "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-play-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
              </svg>
              See how it works
            </button>
          </div>
          {/* see how it works button end */}
        </div>
        {/* buttons end */}

        {/* feature cards start */}
        <div
          className="
                        row
                        row-cols-lg-2
                        row-cols-md-2
                        row-cols-xl-2
                        row-cols-xxl-2
                        row-cols-1
                    "
        >
          {/* card one start */}
          <div className="col-12 col-lg-6 bg-transparent pe-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-stopwatch m-2"
              viewBox="0 0 16 16"
            >
              <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z" />
              <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z" />
            </svg>

            <h6>Learning tracker</h6>
            <p>Accurate tracking to identify your strengths and weaknesses</p>
          </div>
          {/* card one end */}
          {/* card two start */}
          <div className="col-12 col-lg-6 bg-transparent pe-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-chat-right-text m-2"
              viewBox="0 0 16 16"
            >
              <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
              <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
            </svg>

            <h6>Community focus</h6>
            <p>
              Community focus boosts your performence in professional networks
            </p>
          </div>
          {/* card two end */}
        </div>
        {/* feature cards end */}
      </div>
    </>
  );
};

export default Info;
