import { toast } from 'react-toastify';

export const postFormSubmit = async (formData: FormData) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/posts`, {
      method: 'POST',
      headers: {
        token: import.meta.env.VITE_APP_API_KEY,
      },
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      toast.success('Blog post created successfully!', {
        position: 'top-center',
      });
      console.log('Post request successful, server response:', data);
    } else {
      switch (response.status) {
        case 404:
          toast.error('The requested resource was not found.', {
            position: 'top-center',
          });
          break;
        case 500:
          toast.error('Oops! A server error occurred.', {
            position: 'top-center',
          });
          break;
        default:
          toast.error(`An unknown error occurred: HTTP ${response.status}`, {
            position: 'top-center',
          });
          break;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    toast.error('Oops! Something went wrong..', {
      position: 'top-center',
    });
    console.error('Updating post failed: ', error);
  }
};
