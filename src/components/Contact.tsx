import React from 'react';

const Contact = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    await fetch('https://submit-form.com/your-form-id', {
      method: 'POST',
      body: data,
    });
    alert('Message envoyé avec succès !');
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Votre Nom" required />
      <input type="email" name="email" placeholder="Votre Email" required />
      <textarea name="message" placeholder="Votre Message" required />
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default Contact;
