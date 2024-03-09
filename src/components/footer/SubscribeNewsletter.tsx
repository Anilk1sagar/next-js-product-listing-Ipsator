'use client';

import { Loader2, Mail, SendHorizonal } from 'lucide-react';
import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { REG_EXP_PATTERNS } from '@/utils/constants';
import { useToast } from '../ui/toast/use-toast';
import { cn } from '@/lib/utils';

const SubscribeNewsletter = () => {
	const { toast } = useToast();

	// states
	const [inputValue, setInputValue] = useState('');
	const [inputError, setInputError] = useState<string | null>(null);
	const [isSubmitInProcess, setIsSubmitInProcess] = useState(false);

	const isValidForm = () => {
		let isValid = true;

		if (!inputValue) {
			isValid = false;
			setInputError('Please input email');
		} else if (inputValue && !REG_EXP_PATTERNS.email.test(inputValue)) {
			isValid = false;
			setInputError('Invalid email');
		}

		if (isValid) setInputError(null);

		return isValid;
	};

	const onSubmit = () => {
		if (!isValidForm()) return;

		setIsSubmitInProcess(true);

		setTimeout(() => {
			toast({ title: 'Successfully subscribed to the Newsletter', variant: 'success' });
			setInputValue('');
			setIsSubmitInProcess(false);
		}, 1000);
	};

	return (
		<div className="max-w-[280px]">
			<h4 className="font-bold mb-3 text-white">Subscribe</h4>
			<p className="text-sm mb-4">
				Enter your email below to be the first to know about new collections and product launches.
			</p>

			<div className="relative w-full">
				<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
					<Mail className="w-4" />
				</div>

				<Input
					type="text"
					id="email"
					placeholder="Your Email"
					className={cn(
						'block w-full bg-secondary placeholder:text-gray-200 text-sm ps-10 pe-10 focus-visible:ring-1 focus-visible:ring-offset-1 transition-all',
						inputError &&
							'border-destructive focus-visible:ring-destructive focus-visible:ring-offset-destructive'
					)}
					value={inputValue}
					onChange={(e) => {
						setInputValue(e.target.value);
					}}
				/>

				<Button
					className="absolute inset-y-0 end-0 flex items-center pe-3 p-1 px-2 bg-transparent text-gray-200 hover:text-white"
					onClick={onSubmit}
					disabled={isSubmitInProcess}
				>
					{isSubmitInProcess ? (
						<Loader2 className="h-5 w-5 animate-spin" />
					) : (
						<SendHorizonal className="w-5" />
					)}
				</Button>
			</div>

			{inputError && <p className="text-destructive text-sm mt-[2px]">{inputError}</p>}
		</div>
	);
};

export default SubscribeNewsletter;
