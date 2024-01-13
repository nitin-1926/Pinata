import React from 'react';

function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Our services</h2>
            <p className="text-xl text-gray-600">We are passionate about empowering MSMEs to thrive. We believe that every small manufacturer deserves the opportunity to succeed, and through our consulting services, we aim to level the playing field and insightful resources that can propel your business forward. At Pinata, our array of services is designed to elevate every aspect of your MSME journey. Choose excellence, choose Pinata! 🌟</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col p-6 bg-white rounded shadow-xl">
              <center>
                <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <rect className="fill-current" width="64" height="64" rx="32" style={{color:'#d93a10'}} />
                    <g strokeWidth="2">
                      <path className="stroke-current " d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" style={{color:'#000'}}/>
                      <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                      <path className="stroke-current " strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" style={{color:'#000'}}/>
                      <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />
                    </g>
                  </g>
                </svg>
              </center>
              <h4 className="text-lg font-bold leading-snug tracking-tight mb-1">Business Planning & Strategy 🚀</h4>
              <p className="text-gray-600 text-md">At Pinata, we believe that a robust plan is the cornerstone of a thriving business. Collaborating closely with you, our experts develop comprehensive business plans and strategies tailored to achieve your short and long-term goals. From in-depth market analysis and competitive research to meticulous financial forecasting and risk management, we've got every aspect covered.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col p-6 bg-white rounded shadow-xl">
              <center>
                <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                  <rect className="fill-current" width="64" height="64" rx="32" style={{color:'#d93a10'}} />
                    <g strokeWidth="2" transform="translate(19.429 20.571)">
                      <circle className="stroke-current text-white" strokeLinecap="square" cx="12.571" cy="12.571" r="1.143" />
                      <path className="stroke-current text-white" d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696" />
                      <path className="stroke-current" d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835" style={{color:'#000'}}/>
                    </g>
                  </g>
                </svg>
              </center>
              <h4 className="text-lg font-bold leading-snug tracking-tight mb-1">Financial Management 💰</h4>
              <p className="text-gray-600 text-md">For MSMEs, effective allocation of financial resources is paramount. Our financial consultants are dedicated to assisting you with budgeting, cash flow management, cost optimization, and financial modeling. We aim to empower you with the knowledge and tools needed to make informed decisions, ensuring your finances are not just managed but optimized for maximum profitability.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col p-6 bg-white rounded shadow-xl">
              <center>
                <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                  <rect className="fill-current" width="64" height="64" rx="32" style={{color:'#d93a10'}} />
                    <g strokeLinecap="square" strokeWidth="2">
                      <path className="stroke-current " d="M38.826 22.504a9.128 9.128 0 00-13.291-.398M35.403 25.546a4.543 4.543 0 00-6.635-.207" style={{color:'#000'}}/>
                      <path className="stroke-current text-white" d="M19.429 25.143A6.857 6.857 0 0126.286 32v1.189L28 37.143l-1.714.571V40A2.286 2.286 0 0124 42.286h-2.286v2.285M44.571 25.143A6.857 6.857 0 0037.714 32v1.189L36 37.143l1.714.571V40A2.286 2.286 0 0040 42.286h2.286v2.285" />
                    </g>
                  </g>
                </svg>
              </center>
              <h4 className="text-lg font-bold leading-snug tracking-tight mb-1">Ops & Process Improvement 🔄</h4>
              <p className="text-gray-600 text-md">Efficiency is the key to sustained growth. Our consultants specialize in identifying bottlenecks and streamlining processes to enhance productivity and reduce costs. By analyzing your operations and implementing best practices, we empower your business to deliver exceptional products or services. We transform challenges into opportunities, ensuring your operations are finely tuned for success.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col p-6 bg-white rounded shadow-xl">
              <center>
                <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                  <rect className="fill-current" width="64" height="64" rx="32" style={{color:'#d93a10'}} />
                    <g transform="translate(22.857 19.429)" strokeWidth="2">
                      <path className="stroke-current text-white" strokeLinecap="square" d="M12.571 4.571V0H0v25.143h12.571V20.57" />
                      <path className="stroke-current text-white" d="M16 12.571h8" />
                      <path className="stroke-current text-white" strokeLinecap="square" d="M19.429 8L24 12.571l-4.571 4.572" />
                      <circle className="stroke-current" strokeLinecap="square" cx="12.571" cy="12.571" r="3.429" style={{color:'#000'}}/>
                    </g>
                  </g>
                </svg>
              </center>
              <h4 className="text-lg font-bold leading-snug tracking-tight mb-1">Marketing and Branding 📢</h4>
              <p className="text-gray-600 text-md">In the competitive landscape of MSMEs, effective marketing is non-negotiable. Our marketing experts collaborate closely with you to develop personalized strategies, build your brand's identity, and deploy various channels to generate leads and boost visibility. From conceptualization to execution, we ensure your brand stands out.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col p-6 bg-white rounded shadow-xl">
              <center>
                <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                  <rect className="fill-current" width="64" height="64" rx="32" style={{color:'#d93a10'}} />
                    <g strokeLinecap="square" strokeWidth="2">
                      <path className="stroke-current text-white" d="M20.571 20.571h13.714v17.143H20.571z" />
                      <path className="stroke-current" d="M38.858 26.993l6.397 1.73-4.473 16.549-13.24-3.58" style={{color:'#000'}}/>
                    </g>
                  </g>
                </svg>
              </center>
              <h4 className="text-lg font-bold leading-snug tracking-tight mb-1">Tech & Digital Transformation 🔧</h4>
              <p className="text-gray-600 text-md">In the digital age, staying ahead is imperative. Our consultants guide you through the process of digital transformation, leveraging technology to streamline operations, drive innovation, enhance customer experience, and gain a competitive edge. We ensure your business not only adapts to the digital era but thrives in it.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col p-6 bg-white rounded shadow-xl">
              <center>
                <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                  <rect className="fill-current" width="64" height="64" rx="32" style={{color:'#d93a10'}} />
                    <g strokeWidth="2">
                      <path className="stroke-current text-white" d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714" />
                      <path className="stroke-current text-white" d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286" />
                      <path className="stroke-current text-white" d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286" />
                      <path className="stroke-current" d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572" strokeLinecap="square" style={{color:'#000'}} />
                    </g>
                  </g>
                </svg>
              </center>
              <h4 className="text-lg font-bold leading-snug tracking-tight mb-1">Supply Chain Optimization 🌐</h4>
              <p className="text-gray-600 text-md">Efficient supply chain management is the backbone of successful businesses. Our consultants work closely with you to optimize your supply chain, ensuring smooth and cost-effective operations. From inventory management to logistics optimization, we enhance your supply chain efficiency, ultimately contributing to your overall business success.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
