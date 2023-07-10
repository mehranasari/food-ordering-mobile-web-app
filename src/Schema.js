import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Schema = ({ venue: { venue } }) => {
  useEffect(() => {
    if (venue?.logo?.logoUrlLocation) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.innerText = `{"@context": "http://schema.org","@type": "Restaurant","name":"${
        venue?.name
      } | منوباز","address":{"@type":"PostalAddress","streetAddress":"${
        venue?.address
      }","addressLocality":"${
        venue?.city
      }","addressRegion":"محله","postalCode":"${
        venue?.postCode
      }","addressCountry":"//IRAN"},"telephone":"${
        venue?.phoneNumber
      }","url":"${process.env.REACT_APP_SSL_PROTOCOL}://www.${
        venue?.dedicatedDomain
          ? venue?.dedicatedDomain
          : venue?.url + "." + process.env.REACT_APP_DOMAIN_URL
      }/","servesCuisine":"Iranian","openingHours":["Fi-Sa11:00-22:00","Sa11:00-20:00"],"menu":"${
        process.env.REACT_APP_SSL_PROTOCOL
      }://www.${
        venue?.dedicatedDomain
          ? venue?.dedicatedDomain
          : venue?.url + "." + process.env.REACT_APP_DOMAIN_URL
      }/menu","image": "${
        venue?.logo?.logoUrlLocation
      }","aggregateRating":{"@type":"AggregateRating","ratingValue":"5","reviewCount":"100"},"paymentAccepted":"cash,creditcard,onlineportal","priceRange":"ریال ریال","description":"${
        venue?.description
      }"}`;
      document.head.appendChild(script);
      return () => {
        document.head.removeChild(script);
      };
    }
  }, [venue]);
};

Schema.propTypes = {
  venue: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  venue: state.venue,
});

export default connect(mapStateToProps)(Schema);
