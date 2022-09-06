import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-3xl text-center font-bol font-mono mt-10 mb-10'>Our Blogs!!</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 mt-16 gap-4 mb-20 md:ml-16 ml-5">
        <div className="card w-80 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/JRDzD0Q/blog.jpg" alt="Car parts" /></figure>
  <div className="card-body">
    <h2 className="card-title">Car Parts Names with Examples</h2>
    <p>Headlight,
        Mirror,
        Window, Trunk, Brake light, Tire, Door, HubCap, GAs Tank, Windshield, Hood, Roof, Turn signal, Bumper, Door handle, Rear view mirror, windshield wiper, License plate
</p>
    <div className="card-actions justify-end">
      <a href="https://7esl.com/car-parts-vocabulary/"><button className="py-2 px-4 bg-cyan-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">See more..</button></a>
      
    </div>
  </div>
</div>
        <div className="card w-80 bg-base-100 shadow-xl">
  <figure><img style={{height: '180px'}} src="https://i.ibb.co/pyJyQBM/img6.webp" alt="parts" /></figure>
  <div className="card-body">
    <h2 className="card-title">5 Questions to Ask Before You Buy Used Car Parts</h2>
    <p>Does shopping for car parts confuse you? Well, we can tell you with confidence you are not alone! A vehicle is a complex object and if you do not understand the ins and outs, as most people don't, of how it operates....</p>
    <div className="card-actions justify-end">
      <a href="https://www.tradegecko.com/blog/inventory-management/take-small-business-inventory-on-the-go-with-these-mobile-apps"><button className="py-2 px-4 bg-cyan-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">See more..</button></a>
      
    </div>
  </div>
</div>
        <div className="card w-80 bg-base-100 shadow-xl">
  <figure><img style={{height: '180px'}} src="https://i.ibb.co/fG0ZBt7/img12.webp" alt="parts" /></figure>
  <div className="card-body">
    <h2 className="card-title">How to Get Your Used Car Inspected</h2>
    <p>Buying a used car is a great way to be economical and to save yourself some money. With those positives though, there can always be some concerns when it comes to buying a car that has had one or multiple previous owners. As the buyer...</p>
    <div className="card-actions justify-end">
      <a href="https://www.tradegecko.com/blog/inventory-management/how-to-calculate-average-inventory"><button className="py-2 px-4 bg-cyan-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">See more..</button></a>
      
    </div>
  </div>
</div>
               
        </div>
        </div>
    );
};

export default Blogs;