import Image from 'next/image';

import ToolTip from '@/components/common/tooltip/ToolTip';
import { ToolTipPositionEnum } from '@/components/common/tooltip/ToolTip.enum';

import { profileSkillsList } from './ProfileSkills.list';

const ProfileSkills = () => {
	return (
		<div className="mt-5 flex gap-1 flex-wrap">
			{profileSkillsList.map((skill) => (
				<div key={skill.name} className="mb-3">
					<ToolTip position={ToolTipPositionEnum.BOTTOM} content={skill.name}>
						<div>
							<Image
								src={skill.image}
								alt={skill.name}
								className="cursor-help h-401 w-303 p-0.5 border border-104 dark:border-108"
							/>
						</div>
					</ToolTip>
				</div>
			))}
		</div>
	);
};

export default ProfileSkills;
