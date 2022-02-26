import React from 'react'
import {Link} from "gatsby"
import { ArrowLeft } from 'react-feather'

export default function HomeButton() {
  return (
    <div className="home-button">
      <Link to={"/"} replace className="custom-button">
        <ArrowLeft />
      </Link>
    </div>
  );
}
