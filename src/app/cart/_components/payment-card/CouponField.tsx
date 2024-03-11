'use client';

import { Loader2 } from 'lucide-react';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/toast/use-toast';
import { cn } from '@/lib/utils';

const CouponField = () => {
	const { toast } = useToast();

	// states
	const [inputValue, setInputValue] = useState('');
	const [inputError, setInputError] = useState<string | null>(null);
	const [isSubmitInProcess, setIsSubmitInProcess] = useState(false);
	const [couponAdded, setCouponAdded] = useState(false);

	const onAddCoupon = () => {
		setInputError(null);
		setIsSubmitInProcess(true);

		setTimeout(() => {
			toast({ title: 'Coupon added Successfully!', variant: 'success' });
			setCouponAdded(true);
			setIsSubmitInProcess(false);

			if (false) {
				setInputError('Invalid Coupon!');
			}
		}, 1000);
	};

	const onRemoveCoupon = () => {
		setIsSubmitInProcess(true);

		setTimeout(() => {
			toast({ title: 'Coupon removed Successfully!', variant: 'success' });
			setCouponAdded(false);
			setInputValue('');
			setIsSubmitInProcess(false);
		}, 1000);
	};

	return (
		<div className="max-w-full">
			<div className="flex items-center">
				<Input
					type="text"
					id="coupon"
					placeholder="Coupon Code"
					className={cn(
						'h-8 uppercase block w-full placeholder:text-gray-400 text-sm rounded-e-none focus-visible:ring-1 focus-visible:ring-offset-1 transition-all',
						inputError &&
							'border-destructive focus-visible:ring-destructive focus-visible:ring-offset-destructive'
					)}
					value={inputValue}
					onChange={(e) => {
						setInputValue(e.target.value);
					}}
					disabled={couponAdded}
				/>

				{couponAdded ? (
					<Button
						className="h-8 rounded-s-none flex items-center px-2"
						onClick={onRemoveCoupon}
						disabled={isSubmitInProcess}
						variant="outline"
					>
						{isSubmitInProcess ? <Loader2 className="h-5 w-5 animate-spin" /> : <>REMOVE</>}
					</Button>
				) : (
					<Button
						className="h-8 rounded-s-none flex items-center px-2 bg-secondary text-secondary-foreground"
						onClick={onAddCoupon}
						disabled={!inputValue || isSubmitInProcess}
					>
						{isSubmitInProcess ? <Loader2 className="h-5 w-5 animate-spin" /> : <>APPLY</>}
					</Button>
				)}
			</div>

			{inputError && <p className="text-destructive text-sm mt-[2px]">{inputError}</p>}
		</div>
	);
};

export default CouponField;
