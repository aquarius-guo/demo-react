import React from 'react'
import {
  Wrap,
  Lists,
  Describe
} from "@/components";
import "./css/index.scss"

export default function Content() {
  return (
    <div className='content'>
      <React.Suspense fallback={<p>loading...</p>}>
        <Wrap />
      </React.Suspense>
      <Describe />
      <Lists />
    </div>
  )
}
