import React from 'react';
import './Map.scss';

const Map = (props) => {
  return (
    <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12610.764348701518!2d-122.41590897777445!3d37.797278672502856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580f18d8c6ea7%3A0x5d7f53fb70a3a903!2zNzI1IEdyZWVuIFN0LCBTYW4gRnJhbmNpc2NvLCBDQSA5NDEzMywg0KHQqNCQ!5e0!3m2!1sru!2sru!4v1633873962769!5m2!1sru!2sru" width="100%" height="578" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
    </div>
  );
};

export default Map;