import React from "react";
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
  return (
    <CountContainer>
      <CountRow>
        <CountRowItem>
          <h2>581,237</h2>
          <CountRowName>
            <FaUsers color="#212529" size={20} />
            <span>Visitors</span>
          </CountRowName>
        </CountRowItem>
        <CountRowItem>
          <h2>500+</h2>
          <CountRowName>
            <BiCube color="#212529" size={20} />
            <span>Products</span>
          </CountRowName>
        </CountRowItem>
        <CountRowItem>
          <h2>230</h2>
          <CountRowName>
            <CgOrganisation color="#212529" size={20} />
            <span>Organizations</span>
          </CountRowName>
        </CountRowItem>
        <CountRowItem>
          <h2>20,119</h2>
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
