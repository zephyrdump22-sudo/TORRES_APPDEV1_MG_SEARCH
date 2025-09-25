import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SearchResult{
  title: string;
  url: string;
  description: string;
}

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {
  @Input() query = '';

  websites: SearchResult[] = [
    { title: 'Steam', url: 'https://store.steampowered.com', description: 'The biggest PC gaming platform with thousands of games and community features.' },
    { title: 'Epic Games Store', url: 'https://www.epicgames.com/store', description: 'Buy and download PC games, home of Fortnite and free weekly titles.' },
    { title: 'Riot Games', url: 'https://www.riotgames.com', description: 'Creators of League of Legends, Valorant, and more.' },
    { title: 'Ubisoft', url: 'https://www.ubisoft.com', description: 'Home of Assassin’s Creed, Far Cry, Rainbow Six, and other major titles.' },
    { title: 'Electronic Arts (EA)', url: 'https://www.ea.com', description: 'Makers of FIFA, Battlefield, Apex Legends, and The Sims.' },
    { title: 'Rockstar Games', url: 'https://www.rockstargames.com', description: 'Creators of Grand Theft Auto and Red Dead Redemption.' },
    { title: 'Nintendo', url: 'https://www.nintendo.com', description: 'Official site for Mario, Zelda, Pokémon, and the Nintendo Switch.' },
    { title: 'PlayStation', url: 'https://www.playstation.com', description: 'Official PlayStation site for PS5, PS4, games, and PlayStation Plus.' }
  ];

  get filteredResults(): SearchResult[]{
    const q = (this.query || '').trim().toLowerCase();
    if (!q){
      return this.websites;
    }
    return this.websites.filter(site =>
      site.title.toLowerCase().includes(q) ||
      site.description.toLowerCase().includes(q)
      );
  }
}
