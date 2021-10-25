import raw from 'raw.macro';
import { useEffect, useState } from 'react';
import yaml from 'js-yaml'

type Contributor = {
    github: string;
    name: string;
    organization: string;
    college: string;
    avatar: string;
    city: string;
    quote: string;
}

const useContributors = () => {
    const [contributors, setContributors] = useState<Contributor[] | null>(null);
    useEffect(() => {
        const contributorsContent = raw(`./contributors.yaml`);

        setContributors(yaml.load(contributorsContent, { json: true }) as Contributor[]);
    }, [])

    return contributors;
}

export default useContributors;
