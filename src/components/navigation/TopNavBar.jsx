// IMPORTS
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const NavContainer = styled.div`
  position: absolute;
  top: 0;
  z-index: 30;
  width: 100%;
`;

const NavBar = styled.nav`
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  @media (min-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

const BrandContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  @media (min-width: 768px) {
    padding-top: 1rem;
  }
`;

const BrandLink = styled.a`
  margin-left: 0.25rem;
  font-size: 1.875rem;
  font-weight: bold;
  color: #1f2937;
  text-decoration: none;
`;

const NavRight = styled.div`
  display: flex;
  width: 30%;
  justify-content: flex-end;
  text-align: center;
`;

const SignInLink = styled(Link)`
  width: 7rem;
  border-radius: 0.375rem;
  background-color: ${(props) => props.signInColor || "#000000"};
  padding: 0.25rem 0.5rem;
  font-weight: 500;
  color: white;
  text-decoration: none;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${(props) => props.hoverColor || "#6d28d9"};
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.5);
  }
  @media (min-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

// CREATE FUNCTION
export default function TopNavBar({ appName = "AppName", signInColor = "#000000" }) {
  // STATE VARIABLES
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null); // Ref for the dropdown
  const [userPhoto, setUserPhoto] = useState("");

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // HTML
  return (
    <NavContainer>
      <NavBar>
        <NavContent>
          <BrandContainer>
            <BrandLink href="/home">{appName}</BrandLink>
          </BrandContainer>
          <NavRight>
            <SignInLink to="/login" signInColor={signInColor}>Sign In</SignInLink>
          </NavRight>
        </NavContent>
      </NavBar>
    </NavContainer>
  );
}
