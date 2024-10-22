import { useParams } from 'next/navigation';
import { useLocale } from 'next-intl';
import { startTransition } from 'react';

import Button from '@/components/common/button/Button';
import { ButtonVariantEnum } from '@/components/common/button/Button.enum';
import { usePathname, useRouter } from '@/i18n/routing';

import { LanguageType } from './LanguageToggle.enum';

const LanguageToggle = () => {
	const router = useRouter();
	const pathname = usePathname();
	const params = useParams();
	const localActive = useLocale();

	const onLanguageChange = (locale: string) => {
		const nextLocale = locale;

		startTransition(() => {
			router.replace(
				// @ts-expect-error -- TypeScript will validate that only known `params`
				// are used in combination with a given `pathname`. Since the two will
				// always match for the current route, we can skip runtime checks.
				{ pathname, params },
				{ locale: nextLocale }
			);
		});
	};

	return (
		<div aria-label="Language toggle">
			<Button
				label="English"
				ariaPressed={localActive === LanguageType.ENGLISH}
				active={`${localActive === LanguageType.ENGLISH ? 'bg-107 rounded-r-2xl' : ''}`}
				buttonStyle="w-10 h-6 px-2"
				onClickHandler={() => onLanguageChange(LanguageType.ENGLISH)}
				variant={ButtonVariantEnum.OUTLINED_IN_LANGUAGE}>
				EN
			</Button>
			<Button
				label="German"
				ariaPressed={localActive === LanguageType.GERMAN}
				active={`${localActive === LanguageType.GERMAN ? 'bg-107 rounded-l-2xl' : ''}`}
				buttonStyle="w-10 h-6 px-2"
				onClickHandler={() => onLanguageChange(LanguageType.GERMAN)}
				variant={ButtonVariantEnum.OUTLINED_IN_LANGUAGE}>
				DE
			</Button>
		</div>
	);
};

export default LanguageToggle;
