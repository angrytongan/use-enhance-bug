import type { Actions } from './$types';

export const actions: Actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const first = data.get('first') as string;
        const last = data.get('last') as string;

        console.log({
            first,
            last
        });

        return {
            first,
            last
        };
    }
};
