import React from 'react';

const Pricing = () => {
	return (
		<div>
			<h1 className='text-center text-2xl text-primary font-bold'>Choose your best plan</h1>
			<div className='grid mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
			<div className="card w-full bg-emerald-300 text-primary-content">
				<div className="card-body">
					<h2 className="card-title">Low Price $ 99-200</h2>
					<p>Do you want to buy a bike for low price?</p>
					<div className="card-actions justify-end">
						<button className="btn btn-outline btn-primary">Buy Now</button>
					</div>
				</div>
			</div>
			<div className="card w-full bg-slate-300 text-primary-content">
				<div className="card-body">
					<h2 className="card-title">Medium Price $ 200-500</h2>
					<p>Do you want to buy a bike for Medium price?</p>
					<div className="card-actions justify-end">
						<button className="btn btn-outline btn-primary">Buy Now</button>
					</div>
				</div>
			</div>
			<div className="card w-full bg-cyan-300 text-primary-content">
				<div className="card-body">
					<h2 className="card-title">High Price $ 500-1999</h2>
					<p>Do you want to buy a bike for High price?</p>
					<div className="card-actions justify-end">
						<button className="btn btn-outline btn-primary">Buy Now</button>
					</div>
				</div>
			</div>
		</div>
		</div>
	);
};

export default Pricing;