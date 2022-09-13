import React, { useEffect, useRef, useState } from "react";
import { FaUsers } from "react-icons/fa";
import { BiCube, BiReceipt } from "react-icons/bi";
import { CgOrganisation } from "react-icons/cg";
import {
  CountContainer,
  CountRow,
  CountRowItem,
  CountRowName,
} from "../../styles/Count.styles";

const Count = () => {
  const scrollRef = useRef();
  const [countSectionVisible, setCountSectionVisible] = useState();
  console.log(countSectionVisible);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setCountSectionVisible(entry.isIntersecting);
    });

    observer.observe(scrollRef.current);
  }, []);

  useEffect(() => {
    const counters = document.querySelectorAll(".counter");
    const speed = 500; // The lower the slower

    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        // Lower inc to slow and higher to slow
        const inc = target / speed;

        // console.log(inc);
        // console.log(count);

        // Check if target is reached
        if (count < target) {
          // Add inc to count and output in counter
          counter.innerText = parseInt(count + inc);
          // Call function every ms
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };

      if (countSectionVisible) {
        updateCount();
      }
    });
  }, [countSectionVisible]);

  return (
    <CountContainer>
      <CountRow ref={scrollRef}>
        <CountRowItem>
          <h2 className="counter" data-target="581237">
            0
          </h2>
          <CountRowName>
            <FaUsers color="#212529" size={20} />
            <span>Visitors</span>
          </CountRowName>
        </CountRowItem>
        <CountRowItem>
          <h2>
            <span className="counter" data-target="1000">
              0
            </span>
            +
          </h2>
          <CountRowName>
            <BiCube color="#212529" size={20} />
            <span>Products</span>
          </CountRowName>
        </CountRowItem>
        <CountRowItem>
          <h2 className="counter" data-target="500">
            0
          </h2>
          <CountRowName>
            <CgOrganisation color="#212529" size={20} />
            <span>Organizations</span>
          </CountRowName>
        </CountRowItem>
        <CountRowItem>
          <h2 className="counter" data-target="20119">
            0
          </h2>
          <CountRowName>
            <BiReceipt color="#212529" size={20} />
            <span>Orders</span>
          </CountRowName>
        </CountRowItem>
      </CountRow>
    </CountContainer>
  );
};

export default Count;
